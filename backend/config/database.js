const mongoose = require("mongoose");

const connectDataBase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongodb connected with server : ${data.connection.host} `);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDataBase;