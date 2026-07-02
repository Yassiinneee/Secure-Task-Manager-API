// =============================================
// File: src/routes/task.routes.js
// =============================================

const express = require("express");

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

const { verifyToken } = require("../middleware/auth.middleware");

const {
  taskValidation,
  validate,
} = require("../validators/task.validator");

const router = express.Router();

// Protect every task route
router.use(verifyToken);

// ==============================
// CRUD
// ==============================

router.post(
  "/",
  taskValidation,
  validate,
  createTask
);

router.get("/", getTasks);

router.get("/:id", getTask);

router.patch(
  "/:id",
  taskValidation,
  validate,
  updateTask
);

router.delete("/:id", deleteTask);

module.exports = router;