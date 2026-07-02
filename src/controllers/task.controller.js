// =============================================
// File: src/controllers/task.controller.js
// =============================================

const catchAsync = require("../utils/catchAsync");
const taskService = require("../services/task.service");

// =============================================
// Create Task
// =============================================

exports.createTask = catchAsync(async (req, res) => {
  const task = await taskService.createTask(
    req.body,
    req.user._id
  );

  res.status(201).json({
    success: true,
    message: "Task created successfully.",
    task,
  });
});

// =============================================
// Get All Tasks
// =============================================

exports.getTasks = catchAsync(async (req, res) => {
  const tasks = await taskService.getTasks(req.user._id);

  res.status(200).json({
    success: true,
    total: tasks.length,
    tasks,
  });
});

// =============================================
// Get One Task
// =============================================

exports.getTask = catchAsync(async (req, res) => {
  const task = await taskService.getTaskById(
    req.params.id,
    req.user._id
  );

  res.status(200).json({
    success: true,
    task,
  });
});

// =============================================
// Update Task
// =============================================

exports.updateTask = catchAsync(async (req, res) => {
  const task = await taskService.updateTask(
    req.params.id,
    req.user._id,
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Task updated successfully.",
    task,
  });
});

// =============================================
// Delete Task
// =============================================

exports.deleteTask = catchAsync(async (req, res) => {
  await taskService.deleteTask(
    req.params.id,
    req.user._id
  );

  res.status(200).json({
    success: true,
    message: "Task deleted successfully.",
  });
});