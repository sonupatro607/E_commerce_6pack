const mongoose = require("mongoose");

const connectDataBase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected with server : ${data.connection.host} `);
    });
  // if you don't provide catch to handle error that
  //is called "unhandled promise rejection" error >>> server.js
  // .catch((err) => {
  //   console.log(err);
  // });
};

module.exports = connectDataBase;
