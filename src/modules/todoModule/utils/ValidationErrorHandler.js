const ErrorHandler = require("./TodoError");

exports.validationErrorHandler = async (err) => {
  if (error.name == "ValidationError") {
    return (returnObj = {
      message: error.message,
      status: 206,
    });
  } else {
    throw new ErrorHandler(err.message);
  }
};
