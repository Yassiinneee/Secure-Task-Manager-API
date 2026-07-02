// =============================================
// File: src/middleware/auth.middleware.js
// Description: Protect private routes
// =============================================

const jwt = require("jsonwebtoken");

const User = require("../models/User");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.verifyToken = catchAsync(async (req, res, next) => {
  let token;

  // Token from HTTP-only cookie
  if (req.cookies.token) {
    token = req.cookies.token;
  }

  // Token from Authorization header
  if (
    !token &&
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("Access denied. Please login first.", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);

  if (!user) {
    return next(new AppError("User no longer exists.", 401));
  }

  req.user = user;

  next();
});