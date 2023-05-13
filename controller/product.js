const product = require("./../models/product");

const getallproduct = async (req, res) => {
  const mydata = await product.find(req.query);
  res.status(200).json({ mydata });
};

const getallproducttest = async (req, res) => {
  const mydata = await product.find(req.query);

  res.status(400).json({ mydata });
};

module.exports = { getallproduct, getallproducttest };
