const express = require("express");

const app = express();

//bodyparser
app.use(express.json());

const product = require("./router/prodroute");

//Middleware
// syntax -> app.get("routing"(router), logics(controller))
app.use("/", product);

module.exports = app;
