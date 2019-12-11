const mongoose = require("mongoose");

const ROLES = ["staff", "manager", "admin"];
const userSchema = mongoose.Schema(
  {
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
      required: true,
      select: false
    },
    role: {
      type: String,
      enum: ROLES,
      default: "staff"
    }
  },
  {
    toObject: {
      transform: function(doc, ret) {
        delete ret.password;
      }
    },
    toJSON: {
      transform: function(doc, ret) {
        delete ret.password;
      }
    }
  }
);

module.exports = User = mongoose.model("User", userSchema);
