// IMPORTS
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

// ROUTES IMPORT
const userRoutes = require("./routes/users");
const foodRoutes = require("./routes/foods");
const orderRoutes = require("./routes/orders");
const paymentRoutes = require("./routes/payments");

// INIT APP
const app = express();
const server = require("http").Server(app);

// PUSHER INIT
const Pusher = require("pusher");
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true
});

app.set("pusher", pusher);

// USE MIDDLEWARES
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// USE ROUTES
app.use("/api/users", userRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);

// LISTEN SERVER
const port = process.env.PORT || 3010;
server.listen(port, () => {
  console.log(`**** SERVER LISTENING ON PORT: ${port} ****`);
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
