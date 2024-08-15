const express = require("express");

const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// get - api/v1/tasks  - get all tasks
// post - api/v1/tasks - create task
// get -  api/v1/tasks/:id - get task
// put/patch - api/v1/tasks/:id - update task
// delete - api/v1/tasks/:id - delete task

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
