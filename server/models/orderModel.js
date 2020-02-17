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
      name: { type: String, required: true },
      number: { type: String, required: true },
      email: { type: String, required: true }
    },
    payment_type: {
      type: String,
      required: true
    },
    order_owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    order_completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = Order = mongoose.model("Order", orderSchema);
