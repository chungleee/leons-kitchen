const mongoose = require("mongoose");

const ROLES = ["staff", "manager", "admin"];
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  pin: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ROLES,
    default: "staff"
  }
});

module.exports = User = mongoose.model("User", userSchema);
