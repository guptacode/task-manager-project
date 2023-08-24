const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.status(200).send("all items from file");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getSingleTask = (req, res) => {
  res.status(200).json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.status(200).send("task updated");
};

const deleteTask = (req, res) => {
  res.status(200).send("task deleted");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
