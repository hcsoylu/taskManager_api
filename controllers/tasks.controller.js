const Task = require("../models/TaskModel");

const getAllTasks = (req, res) => {
  res.send({ message: "get all task" });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.send({ message: "get task" });
};

const updateTask = (req, res) => {
  res.send({ message: "update task" });
};

const deleteTask = (req, res) => {
  res.send({ message: "delete task" });
};

module.exports = { getTask, updateTask, deleteTask, getAllTasks, createTask };
