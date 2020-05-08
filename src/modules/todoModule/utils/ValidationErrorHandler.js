const ErrorHandler = require("./TodoError");

exports.validationErrorHandler = async (error) => {
  if (error && error.name == "ValidationError") {
    return (returnObj = {
      message: error.message,
      status: 206,
    });
  } else {
    throw new ErrorHandler(err.message);
  }
};
