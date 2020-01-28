const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const ImageKit = require("imagekit");
const sharp = require("sharp");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
  urlEndpoint: "https://ik.imagekit.io/pge4gj9pb"
});

const errors = {
  logIn: "Please log in.",
  unauthorized: "Access unauthorized"
};

const authenticate = async (req, res, next) => {
  try {
    if (
      !(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
      )
    ) {
      return res.status(401).json({ error: errors.logIn });
    } else {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById({ _id: decoded._id });
      req.user = user;
      res.locals.user_role = decoded.role;
      next();
    }
  } catch (error) {
    console.error(error);
    return res.status(403).json(error);
  }
};

const checkRole = role => async (req, res, next) => {
  try {
    if (role !== res.locals.user_role) {
      return res.status(401).json({
        error: errors.unauthorized
      });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

const sharpenImage = async (req, res, next) => {
  const { originalname } = req.file;
  const buffer = await sharp(req.file.buffer)
    .jpeg({ quality: 30 })
    .toBuffer();

  req.file = {
    originalname,
    buffer
  };

  next();
};

const uploadToImagekit = async (req, res, next) => {
  console.log(req.file);
  try {
    if (req.mimetypeError && !req.file) {
      console.log(req.mimetypeError);
    } else {
      await imagekit.upload(
        {
          file: req.file.buffer.toString("base64"),
          fileName: req.file.originalname
        },
        (error, result) => {
          if (error) {
            console.error(error);
          } else {
            req.imagekit_result = result;
            next();
          }
        }
      );
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

module.exports = { authenticate, checkRole, uploadToImagekit, sharpenImage };
