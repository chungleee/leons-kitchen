const mongoose = require("mongoose");

const CATEGORIES = ["starter", "platter", "beverage", "dessert", "custom"];
const foodSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: CATEGORIES,
    default: "platter",
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = Food = mongoose.model("Food", foodSchema);
