// ===============================
// File: src/app.js
// Description: Express Application
// ===============================

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const morgan = require("morgan");
const passport = require("passport");

const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");

const AppError = require("./utils/AppError");
const errorHandler = require("./middleware/error.middleware");
const notFound = require("./middleware/notFound.middleware");

// Passport Configuration
require("./config/passport");

const app = express();

// ===============================
// Security Middlewares
// ===============================

app.use(helmet());

// Enable CORS

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Body Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies

app.use(cookieParser());

// Prevent NoSQL Injection

app.use(mongoSanitize());

// Prevent XSS

app.use(xss());

// Logger

app.use(morgan("dev"));

// Passport

app.use(passport.initialize());

// ===============================
// Health Check
// ===============================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Manager API Running 🚀",
  });
});

// ===============================
// Routes
// ===============================

app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);

// ===============================
// 404 Handler
// ===============================

app.use(notFound);

// ===============================
// Global Error Handler
// ===============================

app.use(errorHandler);

module.exports = app;