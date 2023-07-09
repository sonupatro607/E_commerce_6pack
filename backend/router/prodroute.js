const express = require("express");
const { getProduct, createProduct } = require("../controller/prodcontroller");

const routers = express.Router();

//<route path:"/" element:<homepage/>/>
routers.route("/products").get(getProduct);
routers.route("/product/new").post(createProduct);

module.exports = routers;
