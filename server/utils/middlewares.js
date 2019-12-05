const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("decoded", decoded);
    const user = await User.findById({ _id: decoded._id });
    req.user = user;
    res.locals.user_role = decoded.role;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json(error);
  }
};

const checkRole = role => async (req, res, next) => {
  try {
    if (role !== res.locals.user_role) {
      return res.status(401).json({
        error: "Access unauthorized"
      });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

module.exports = { authenticate, checkRole };
