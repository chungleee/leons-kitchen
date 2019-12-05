const router = require("express").Router();
const securePin = require("secure-pin");
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

  // generate pin
  const pin = securePin.generatePinSync(4);

  // if false - create user
  const newUser = new User({
    email,
    password,
    pin
  });

  // save user creation
  await newUser.save();

  // return data
  return res.status(201).json({
    success: true,
    data: newUser
  });
});

// @access  Public
// @desc    Log user account
// @route   POST /login
router.post("/login", async (req, res) => {
  const { pin, password } = req.body;
  // find user by pin
  const user = await User.findOne({ pin });
  // if no user - return error
  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  } else {
    // else - compare passwords
    // if no match - return error
    if (!(user.password === password)) {
      return res.status(403).json({
        error: "Incorrect password"
      });
    } else {
      // else - login
      return res.status(200).json({
        success: true,
        data: user
      });
    }
  }
});

module.exports = router;
