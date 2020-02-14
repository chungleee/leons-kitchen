// IMPORTS
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// ROUTES IMPORT
const userRoutes = require("./routes/users");
const foodRoutes = require("./routes/foods");
const orderRoutes = require("./routes/orders");
const paymentRoutes = require("./routes/payments");
// INIT APP
const app = express();

// INIT SOCKET
const server = require("http").Server(app);
const io = require("socket.io")(server);

// USE MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// USE ROUTES
app.use("/api/users", userRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server works"
  });
});

// LISTEN SERVER
const port = process.env.PORT || 3010;
server.listen(port, () => {
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

io.of("/kitchen").on("connection", socket => {
  console.log("this should only connect if client path is /kitchen");
});

module.exports = { io };
