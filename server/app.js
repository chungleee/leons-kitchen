// IMPORTS
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// ROUTES IMPORT
const userRoutes = require("./routes/users");

// INIT APP
const app = express();

// USE MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// USE ROUTES
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server works"
  });
});

// LISTEN SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`**** SERVER LISTENING ON http://localhost:${port} ****`);
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("**** Database connected ****");
  })
  .catch(error => {
    console.error(error);
  });
