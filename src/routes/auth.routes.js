// =============================================
// File: src/routes/auth.routes.js
// =============================================

const express = require("express");
const passport = require("passport");

const {
  signup,
  login,
  logout,
  me,
  googleCallback,
} = require("../controllers/auth.controller");

const { verifyToken } = require("../middleware/auth.middleware");
const { loginLimiter } = require("../middleware/rateLimiter");

const {
  registerValidation,
  loginValidation,
  validate,
} = require("../validators/auth.validator");

const router = express.Router();

// =============================================
// Local Authentication
// =============================================

router.post(
  "/signup",
  registerValidation,
  validate,
  signup
);

router.post(
  "/login",
  loginLimiter,
  loginValidation,
  validate,
  login
);

router.post("/logout", verifyToken, logout);

router.get("/me", verifyToken, me);

// =============================================
// Google OAuth
// =============================================

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  googleCallback
);

module.exports = router;