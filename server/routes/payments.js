const router = require("express").Router();
const Food = require("../models/foodModel");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { cart } = req.body;
    const foodIds = cart.map(item => {
      return item._id;
    });

    // get all food items by id
    const food_items = await Food.find({ _id: { $in: foodIds } });

    // sum up food item prices
    const subtotal = food_items.reduce((subtotal, current) => {
      return (subtotal += Number(current.price));
    }, 0);

    const payment_intent = await stripe.paymentIntents.create({
      amount: subtotal * 100,
      currency: "cad"
    });

    console.log(payment_intent);

    return res
      .status(200)
      .json({ success: true, client_secret: payment_intent.client_secret });
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
});

module.exports = router;
