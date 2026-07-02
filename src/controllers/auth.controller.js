// =============================================
// File: src/controllers/auth.controller.js
// =============================================

const catchAsync = require("../utils/catchAsync");
const authService = require("../services/auth.service");
const generateToken = require("../utils/generateToken");

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 Days
};

// =============================================
// Register
// =============================================

exports.signup = catchAsync(async (req, res) => {
  const { user, token } = await authService.register(req.body);

  res.cookie("token", token, cookieOptions);

  res.status(201).json({
    success: true,
    message: "Account created successfully.",
    token,
    user,
  });
});

// =============================================
// Login
// =============================================

exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const { user, token } = await authService.login(
    email,
    password
  );

  res.cookie("token", token, cookieOptions);

  res.status(200).json({
    success: true,
    message: "Login successful.",
    token,
    user,
  });
});

// =============================================
// Logout
// =============================================

exports.logout = catchAsync(async (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  });
});

// =============================================
// Current User
// =============================================

exports.me = catchAsync(async (req, res) => {
  const user = await authService.getCurrentUser(
    req.user._id
  );

  res.status(200).json({
    success: true,
    user,
  });
});

// =============================================
// Google OAuth Success
// =============================================

exports.googleCallback = catchAsync(async (req, res) => {
  const token = generateToken(req.user._id);

  res.cookie("token", token, cookieOptions);

  res.status(200).json({
    success: true,
    message: "Google login successful.",
    token,
    user: req.user,
  });
});