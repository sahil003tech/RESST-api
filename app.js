require("dotenv").config();

const express = require("express");

const app = express();
const connect = require("./db/connect");

const PORT = process.env.PORT || 5000;

const product_route = require("./routes/product");

app.get("/", (req, res) => {
  res.send("hii i am live");
});

app.use("/api/product", product_route);
const Start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`${PORT} yes i am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};
Start();
