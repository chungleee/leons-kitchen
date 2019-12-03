const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  role: String,
  PIN: String
});

module.exports = User = mongoose.model("User", userSchema);
