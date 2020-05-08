const express = require("express");
const router = express.Router();

// Import Controllers
const {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("./controllers");

router.route("/getTodos").get(getTodos);

router.route("/addTodo").post(createTodo);

router.route("/updateTodo/:todoId").put(updateTodo);

router.route("/deleteTodo/:todoId").delete(deleteTodo);

module.exports = router;
