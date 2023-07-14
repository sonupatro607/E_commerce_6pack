const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server error";

  // CASTERROR handling :- wrong mongodb id with the request error handler
  if (err.name === "CastError") {
    const message = `Resource no found ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error: err.message, // err.stack ---> give you detailed error overview
  });
};
