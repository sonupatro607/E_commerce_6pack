const express = require("express");
const {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/prodcontroller");

const routers = express.Router();

//<route path:"/" element:<homepage/>/>
routers.route("/products").get(getAllProduct);
routers.route("/product/new").post(createProduct);
routers
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductById);

module.exports = routers;
