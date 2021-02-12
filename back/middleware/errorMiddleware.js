const notFound = (err, req, res) => {
  const error = new Error(`Not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : err.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV == 'production' ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
