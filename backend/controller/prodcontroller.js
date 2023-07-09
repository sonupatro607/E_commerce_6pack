const product = require("../models/productModel");

// Create Product
exports.createProduct = async (req, res, next) => {
  const newProduct = await product.create(req.body);

  res.status(200).json(newProduct);
};

// get All Products
exports.getProduct = (req, res) => {
  console.log(req.url);
  //   res.send({ message: "this is your Home page" });
  res.status(200).send({ message: "this is your Home page" });
};
