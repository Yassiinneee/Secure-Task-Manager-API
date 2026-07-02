// =============================================
// File: src/middleware/error.middleware.js
// =============================================

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Duplicate email
  if (err.code === 11000) {
    err.statusCode = 400;
    err.message = "Email already exists.";
  }

  // Invalid MongoDB ObjectId
  if (err.name === "CastError") {
    err.statusCode = 400;
    err.message = "Invalid resource ID.";
  }

  // JWT expired
  if (err.name === "TokenExpiredError") {
    err.statusCode = 401;
    err.message = "Session expired. Please login again.";
  }

  // JWT invalid
  if (err.name === "JsonWebTokenError") {
    err.statusCode = 401;
    err.message = "Invalid authentication token.";
  }

  // Validation Error
  if (err.name === "ValidationError") {
    err.statusCode = 400;
    err.message = Object.values(err.errors)
      .map((value) => value.message)
      .join(", ");
  }

  res.status(err.statusCode).json({
    success: false,
    status: err.status,
    message: err.message,
    stack:
      process.env.NODE_ENV === "development"
        ? err.stack
        : undefined,
  });
};