const router = require("express").Router();
const Food = require("../models/foodModel");

// @access  Public
// @desc    Food item test route
// @route   GET /test
router.get("/test", (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: "this is the food item test route" });
});

module.exports = router;
