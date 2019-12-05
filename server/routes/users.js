const router = require("express").Router();
const User = require("../models/userModel");

// @access  Public
// @desc    Test route
// @route   GET /test
router.get("/test", (req, res) => {
  return res.status(200).json({
    success: true,
    msg: "This is the users test route"
  });
});

// @access  Public - for now
// @desc    Create user account
// @route   POST /create
router.post("/create", async (req, res) => {
  const { email, password } = req.body;
  // find user
  const user = await User.findOne({ email });
  // if exists - return error
  if (user) {
    return res.status(409).json({
      error: "Email is already in use"
    });
  }
  // if false - create user
  const newUser = new User({
    email,
    password,
    pin: "12345"
  });

  await newUser.save();

  return res.status(201).json({
    success: true,
    data: newUser
  });
});

module.exports = router;
