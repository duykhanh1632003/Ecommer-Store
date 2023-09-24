const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
import register from "./routes/register"
import login from "./routes/login"
import stripe from "./routes/stripe"
require("dotenv").config();

const app = express();
const products = require("./products");

app.use(express.json());
app.use(cors());
app.use("/api/register",register)
app.use("/api/login", login)

app.use("/api/stripe", stripe)


app.get("/", (req, res) => {
  res.send("hahaahha");
});

app.get("/products", (req, res) => {
  res.send(products)
})

const port = process.env.PORT || 5000;
const uri = process.env.URI;
console.log("check uri", uri);
app.listen(port, () => {
  console.log(`server running on port:${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connect establish"))
  .catch((error) => console.log("MongoDB connection failed"));
