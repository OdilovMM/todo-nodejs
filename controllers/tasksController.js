const asyncAwait = require("../middlewares/asyncAwait");
const Task = require("../models/taskModel");

const getAllTasks = asyncAwait(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ status: "success", tasks });
});

const getTask = asyncAwait(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById({ _id: id });
  if (!task) {
    return res.status(404).json({ msg: "No task found" });
  }
  res.status(200).json({ status: "success", task });
});

const deleteTask = asyncAwait(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndDelete({ _id: id });
  if (!task) {
  }
  res.status(200).json({ status: "Deleted", task });
});

const updateTask = asyncAwait(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ status: "Updated", task });
});

const createTask = asyncAwait(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ status: "success", task });
});

module.exports = {
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
  createTask,
};
