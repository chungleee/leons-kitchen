const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

router.post("/create-payment-intent", async (req, res) => {
  try {
    console.log("req body", req.body);

    const payment_intent = await stripe.paymentIntents.create({
      amount: 9000,
      currency: "cad"
    });
    console.log("payment intent", payment_intent);

    return res
      .status(200)
      .json({ success: true, client_secret: payment_intent.client_secret });
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
});

module.exports = router;
