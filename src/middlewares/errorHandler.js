const errorHandler = (err, req, res, next) => {
  // Log the error to the console
  console.log(err);

  res.status(err.statusCode || 500).json({
    status: false,
    error: err.message || `Server Error`,
  });
};

module.exports = errorHandler;
