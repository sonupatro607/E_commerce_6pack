const product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsynchandler = require("../middleware/catchAsyncError");
const Apifeatures = require("../utils/apifeatures");

// Create Product -- Admin
exports.createProduct = catchAsynchandler(async (req, res, next) => {
  const newProduct = await product.create(req.body);

  if (!newProduct) {
    return next(new ErrorHander("new product not found", 404));
  }

  res.status(200).json(newProduct);
});

// get All Products
exports.getAllProduct = catchAsynchandler(async (req, res, next) => {
  // console.log(req.url);
  //   res.send({ message: "this is your Home page" });
  const apiFeture = new Apifeatures(product.find(), req.query).search();
  const products = await apiFeture.query;

  if (!products) {
    return next(new ErrorHander("products not found", 404));
  }
  res.status(200).send({
    success: true,
    products,
  });
});

// get Product By ID
exports.getProductById = catchAsynchandler(async (req, res, next) => {
  const prodById = await product.findById(req.params.id);

  if (!prodById) {
    return next(new ErrorHander("product not found", 404));
  }

  res.status(200).send({
    success: true,
    prodById,
  });
});

// update the product --- Admin
exports.updateProduct = catchAsynchandler(async (req, res, next) => {
  const prod = await product.findById(req.params.id);

  if (!prod) {
    return next(new ErrorHander("product not found", 404));
  }

  const updatedproduct = await product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: true,
    }
  );
  res.status(200).send({
    success: true,
    updatedproduct,
  });
});

// Delete the Product-- Admin
exports.deleteProduct = catchAsynchandler(async (req, res, next) => {
  const prod = await product.findById(req.params.id);

  if (!prod) {
    return next(new ErrorHander("product not found", 404));
  }

  const deletedproduct = await product.findByIdAndRemove(req.params.id);
  res.status(200).send({
    success: true,
    deletedproduct,
  });
});
