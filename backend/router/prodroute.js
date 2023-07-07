const express = require("express");
const { getProduct } = require("../controller/prodcontroller");

const routers = express.Router();

routers.route("/").get(getProduct);

module.exports = routers;
