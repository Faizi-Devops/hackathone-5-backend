const express = require("express");
const connectDB = require("./db/connectdb");
const dotenv = require("dotenv");
const cors = require("cors");
const userRegister = require("./routes/User");
const category = require("./routes/Category");
const mongoose = require("mongoose");

const todo = require("./routes/Todo");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRegister);
app.use("/todo", todo);
app.use("/cat", category);
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Make sure to define or retrieve your DATABASE_URL properly
const DATABASE_URL = process.env.DATABASE_URL;
// Database
mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
