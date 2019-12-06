const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  food_type: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = Food = mongoose.model("Food", foodSchema);
