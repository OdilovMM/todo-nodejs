const express = require("express");
const {
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
  createTask,
} = require("../controllers/tasksController");
const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);
router.post("/", createTask);

module.exports = router;
