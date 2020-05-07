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

router.route("/createTodo").post(createTodo);

router.route("/updateTodo").put(deleteTodo);

router.route("/deleteTodo").delete(updateTodo);

module.exports = router;
