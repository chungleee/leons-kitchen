const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server works"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`**** SERVER LISTENING ON http://localhost:${port} ****`);
});
