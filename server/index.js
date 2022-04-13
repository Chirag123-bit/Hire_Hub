const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Sucessfully");
  })
  .catch(() => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log("Sever started on port " + process.env.PORT);
});
