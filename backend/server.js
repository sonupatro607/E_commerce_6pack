const app = require("./app.js");
const dotenv = require("dotenv");

//dotenv
dotenv.config({ path: "backend/config/config.env" });

const products = require("./router/prodroute.js");

//Middleware
// syntax -> app.get("routing"(router), logics(controller))
app.use("/", products);

app.listen(process.env.PORT, () => {
  console.log("server is started");
});
