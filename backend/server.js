const app = require("./app.js");
const dotenv = require("dotenv");
const connnectionDatabase = require("./config/database.js");
const routes = require("./router/prodroute.js");
//dotenv
dotenv.config({ path: "backend/config/config.env" });

// connect to the mongodb(dotenv ke upoper kam nhi karega kyuki usmai DB_URL ha isliye)
connnectionDatabase();

//Middleware
// syntax -> app.get("routing"(router), logics(controller))
// app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log("server is started");
});
