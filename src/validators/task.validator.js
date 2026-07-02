// =============================================
// File: src/validators/task.validator.js
// =============================================

const { body, validationResult } = require("express-validator");

// =============================================
// Task Validation
// =============================================

exports.taskValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Task title is required.")
    .isLength({ min: 3, max: 100 })
    .withMessage("Title must be between 3 and 100 characters."),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters."),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be true or false."),
];

// =============================================
// Validation Middleware
// =============================================

exports.validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};