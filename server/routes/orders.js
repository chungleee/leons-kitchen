const router = require("express").Router();
const customId = require("custom-id");
const Order = require("../models/orderModel");
const {
  authenticate,
  checkRole,
  attachSocketsIO
} = require("../utils/middlewares");

// @access  Private - for staffs
// @desc    Create order
// @route   POST /create
router.post(
  "/create",
  authenticate,
  checkRole(["staff", "user"]),
  attachSocketsIO,
  async (req, res) => {
    try {
      const { socket } = req;
      const {
        food_items,
        price_total,
        order_for,
        payment_type,
        order_owner
      } = req.body;

      const newOrder = await new Order({
        food_items: [...food_items],
        price_total,
        order_id: customId({
          randomLength: 3
        }),
        order_for,
        payment_type,
        order_owner
      });

      await newOrder.save();

      const new_order = await newOrder.populate("food_items");
      await socket.emit("new_order", new_order);

      return res.status(200).json({
        success: true,
        newOrder
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json(error);
    }
  }
);

// @access  Private - for admins and (future users)
// @desc    Get all orders
// @route   GET /
router.get(
  "/",
  authenticate,
  checkRole(["admin", "user"]),
  async (req, res) => {
    try {
      const orders = await Order.find({});
      if (!orders) {
        return res.status(404).json({ error: "Orders not found" });
      } else {
        return res.status(200).json({ success: true, data: orders });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).json({ msg: "Something went wrong", error });
    }
  }
);

// @access  Private - for admins and (future users)
// @desc    Get order by id
// @route   GET /orderId
router.get(
  "/:orderId",
  authenticate,
  checkRole(["admin", "user"]),
  async (req, res) => {
    try {
      const _id = req.params.orderId;
      const order = await Order.findById({ _id }).populate(
        "food_items order_owner"
      );
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      } else {
        return res.status(200).json({ success: true, data: order });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).json(error);
    }
  }
);

// @access  Private - for admin, staff, user
// @desc    Delete order
// @route   DELETE /orderId
router.delete(
  "/:orderId",
  authenticate,
  checkRole(["admin", "staff", "user"]),
  async (req, res) => {
    try {
      const _id = req.params.orderId;
      const orderToDelete = await Order.findByIdAndDelete({ _id });
      if (!orderToDelete) {
        return res.status(404).json({ error: "Order not found." });
      } else {
        return res.status(200).json({ deleted: true, data: orderToDelete });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).json(error);
    }
  }
);

module.exports = router;
