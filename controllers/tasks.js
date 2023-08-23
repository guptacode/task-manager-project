const getAllTasks = (req, res) => {
  res.status(200).send("all items from file");
};

const createTask = (req, res) => {
  res.status(201).json(req.body);
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
