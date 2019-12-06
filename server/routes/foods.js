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

// @access  Will be private - admin/managers
// @desc    Create food item
// @route   POST /create
router.post("/create", async (req, res) => {
  try {
    const { title, category, price } = req.body;
    const newFood = await new Food({
      title,
      category,
      price
    }).save();

    return res.status(200).json({ success: true, data: newFood });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

// @access  Will be private - admin/managers
// @desc    Get all foods
// @route   GET /
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find({});
    if (!foods) {
      return res.status(404).json({ error: "Something went wrong." });
    } else {
      return res.status(200).json({ success: true, data: foods });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

// @access  Will be private - admin/managers
// @desc    Get all foods by category
// @route   GET /:category
router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const foods = await Food.find({ category });
    if (!foods) {
      return res.status(400).json({ error: "Food items not found" });
    } else {
      return res.status(200).json({ success: true, data: foods });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

// @access  Will be private - admin/managers
// @desc    Get food by id
// @route   GET /:foodId
router.get("/:foodId", async (req, res) => {
  try {
    const _id = req.params.foodId;
    const food = await Food.findById({ _id });

    if (!food) {
      return res.status(404).json({ error: "Food item not found" });
    } else {
      return res.status(200).json({ success: true, data: food });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

// @access  Will be private - admin/managers
// @desc    Delete food by id
// @route   DELETE /:foodId
router.delete("/:foodId", async (req, res) => {
  try {
    const _id = req.params.foodId;
    const food = await Food.findByIdAndDelete({ _id });

    if (!food) {
      return res.status(404).json({ error: "Food item not found" });
    } else {
      return res.status(200).json({
        deleted: true,
        data: food
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

module.exports = router;
