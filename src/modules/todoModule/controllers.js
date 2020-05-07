// Importing the services
const {
  getTodosService,
  createTodoService,
  updateTodoService,
  deleteTodoService,
} = require("./services");
const { TodoControllerError } = require("./utils/TodoError");

exports.getTodos = async (req, res, next) => {
  try {
    let todoList = await getTodosService();
    res.status(todoList.status).json(todoList);
  } catch (error) {
    next(err);
  }
};

exports.createTodo = async (req, res, next) => {
  let todoObject = req.body;
  try {
    let todoList = await createTodoService(todoObject);
    res.status(todoList.status).json(todoList);
  } catch (error) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  let todoUpdateObject = req.body;
  let { todoId } = req.params;
  try {
    let todoList = await updateTodoService(todoId, todoUpdateObject);
    res.status(todoList.status).json(todoList);
  } catch (error) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  let { todoId } = req.params;
  try {
    let todoList = await deleteTodoService(todoId);
    res.status(todoList.status).json(todoList);
  } catch (error) {
    next(err);
  }
};
