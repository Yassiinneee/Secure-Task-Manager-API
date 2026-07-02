// =============================================
// File: src/services/task.service.js
// =============================================

const Task = require("../models/Task");
const AppError = require("../utils/AppError");

class TaskService {
  // ==========================
  // Create Task
  // ==========================
  async createTask(data, owner) {
    return await Task.create({
      ...data,
      owner,
    });
  }

  // ==========================
  // Get User Tasks
  // ==========================
  async getTasks(owner) {
    return await Task.find({ owner }).sort({
      createdAt: -1,
    });
  }

  // ==========================
  // Get Single Task
  // ==========================
  async getTaskById(id, owner) {
    const task = await Task.findOne({
      _id: id,
      owner,
    });

    if (!task) {
      throw new AppError("Task not found.", 404);
    }

    return task;
  }

  // ==========================
  // Update Task
  // ==========================
  async updateTask(id, owner, data) {
    const task = await Task.findOneAndUpdate(
      {
        _id: id,
        owner,
      },
      data,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      throw new AppError("Task not found.", 404);
    }

    return task;
  }

  // ==========================
  // Delete Task
  // ==========================
  async deleteTask(id, owner) {
    const task = await Task.findOneAndDelete({
      _id: id,
      owner,
    });

    if (!task) {
      throw new AppError("Task not found.", 404);
    }

    return task;
  }
}

module.exports = new TaskService();