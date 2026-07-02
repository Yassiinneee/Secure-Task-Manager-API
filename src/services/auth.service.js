// =============================================
// File: src/services/auth.service.js
// =============================================

const User = require("../models/User");
const AppError = require("../utils/AppError");
const generateToken = require("../utils/generateToken");

class AuthService {
  // ==========================
  // Register User
  // ==========================
  async register(data) {
    const { name, email, password } = data;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new AppError("Email already exists.", 400);
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const token = generateToken(user._id);

    return { user, token };
  }

  // ==========================
  // Login User
  // ==========================
  async login(email, password) {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new AppError("Invalid email or password.", 401);
    }

    if (user.provider === "google") {
      throw new AppError(
        "This account uses Google login.",
        400
      );
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      throw new AppError("Invalid email or password.", 401);
    }

    const token = generateToken(user._id);

    user.password = undefined;

    return { user, token };
  }

  // ==========================
  // Current User
  // ==========================
  async getCurrentUser(userId) {
    const user = await User.findById(userId);

    if (!user) {
      throw new AppError("User not found.", 404);
    }

    return user;
  }
}

module.exports = new AuthService();