const connect = require("./db/connect");
require("dotenv").config();
const productw = require("./models/product");
const productjson = require("./product.json");

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    await productw.create(productjson);
    console.log("sucess");
  } catch (error) {
    console.log(error);
  }
};

start();
