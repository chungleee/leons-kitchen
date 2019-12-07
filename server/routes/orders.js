const router = require("express").Router();
const customId = require("custom-id");
const Order = require("../models/orderModel");

// @access  Public
// @desc    Test order routes
// @route   GET /test
router.get("/test", (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: "this is the orders test route" });
});

// @access  Public - for staffs
// @desc    Create order
// @route   POST /create
router.post("/create", async (req, res) => {
  try {
    console.log(req.body);
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

    return res.status(200).json({
      success: true,
      data: newOrder
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
