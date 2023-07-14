const app = require("./app.js");
const dotenv = require("dotenv");
const connnectionDatabase = require("./config/database.js");
const routes = require("./router/prodroute.js");

// "uncaught exception error" handling (must be always top on the codes otherwise ut won't get catch the error)
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to uncaught exception error`);
  process.exit(1);
});

//dotenv
dotenv.config({ path: "backend/config/config.env" });

// connect to the mongodb(dotenv ke upoper kam nhi karega kyuki usmai DB_URL ha isliye)
connnectionDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log("server is started");
});

// unhandled promise rejection:-
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server due to unhandled promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});

//note:-
//process.on("eventname", callback function) ==>it is equlvalent to the" addEventlistener"
