const express = require("express");
const ErroerHandleMiddlewar = require("./middleware/error");

const app = express();

//bodyparser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>hell avi</h1>");
});

const product = require("./router/prodroute");

//Middleware for Accept a router requestes and give the response of request
// syntax -> app.get("routing"(router), logics(controller))
app.use("/", product);

//middleware for Accept Error handling requests
app.use(ErroerHandleMiddlewar);

module.exports = app;
