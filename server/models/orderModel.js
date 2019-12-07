const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    food_items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        required: true
      }
    ],
    price_total: {
      type: String,
      required: true
    },
    order_id: {
      type: String,
      required: true
    },
    order_for: {
      type: String,
      required: true
    },
    payment_type: {
      type: String,
      required: true
    },
    order_owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = Order = mongoose.model("Order", orderSchema);
