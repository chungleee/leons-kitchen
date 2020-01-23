const router = require("express").Router();
const multer = require("multer");
const Food = require("../models/foodModel");
const {
  authenticate,
  checkRole,
  uploadToImagekit
} = require("../utils/middlewares");

const upload = multer({
  fileFilter: async function(req, file, cb) {
    const acceptedFileTypes = ["image/jpeg", "image/png"];
    if (!file) {
      cb(new Error("Something is not right"));
    } else if (!acceptedFileTypes.includes(file.mimetype)) {
      const mimetypeError = "Only JPG and PNG file types are accepted";
      req.mimetypeError = mimetypeError;
      cb(null, false);
    } else {
      cb(null, true);
    }
  }
});

// @access  Public
// @desc    Food item test route
// @route   GET /test
router.post(
  "/test-create",
  upload.single("photo"),
  uploadToImagekit,
  async (req, res) => {
    try {
      console.log(req.imagekit_result);
      return res
        .status(200)
        .json({ success: true, msg: "this is the food item test route" });
    } catch (error) {
      return res.send(error);
    }
  }
);

// @access  Will be private - admin/managers
// @desc    Create food item
// @route   POST /create
router.post(
  "/create",
  authenticate,
  checkRole("admin"),
  upload.single("photo"),
  uploadToImagekit,
  async (req, res) => {
    try {
      const { title, category, price } = req.body;
      const imagekit_result = req.imagekit_result;

      const newFood = await new Food({
        title,
        category,
        price,
        url: imagekit_result.url
      }).save();

      return res.status(200).json({ success: true, newFood });
    } catch (error) {
      console.error(error);
      return res.status(400).json(error);
    }
  }
);

// @access  Will be private - admin/managers
// @desc    Get all foods
// @route   GET /
router.get("/", async (req, res) => {
  try {
    const foods = await Food.find({});
    if (!foods) {
      return res.status(404).json({ error: "Something went wrong." });
    } else {
      return res.status(200).json({ success: true, foods });
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
      return res.status(200).json({ success: true, foods });
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
      return res.status(200).json({ success: true, food });
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

// @access  Will be private - admin/managers
// @desc    Delete food by id
// @route   DELETE /:foodId
router.delete(
  "/:foodId",
  authenticate,
  checkRole("admin"),
  async (req, res) => {
    try {
      const _id = req.params.foodId;
      const food = await Food.findByIdAndDelete({ _id });

      if (!food) {
        return res.status(404).json({ error: "Food item not found" });
      } else {
        return res.status(200).json({
          deleted: true,
          food
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(400).json(error);
    }
  }
);

module.exports = router;
