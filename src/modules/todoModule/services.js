// Importing the models
const todoModel = require("./models");

//Import modules
const uniqid = require("uniqid");

//Error handlers
const { TodoServiceError } = require("./utils/TodoError");
const { validationErrorHandler } = require("./utils/ValidationErrorHandler");

exports.getTodosService = async () => {
  try {
    let todoList = await todoModel.find();
    let responseObject = await Object.freeze({
      success: true,
      data: todoList,
      status: 200,
    });
    return responseObject;
  } catch (error) {
    throw new TodoServiceError(error.message);
  }
};

exports.createTodoService = async (todoObject) => {
  try {
    let todoId = await uniqid(`order-`);
    let spreadObj = await Object.assign({ todoId }, todoObject);
    let todo = await todoModel.create(spreadObj);
    let responseObject = await Object.freeze({
      success: true,
      data: todo,
      message: `Todo created successfully`,
      status: 201,
    });
    return responseObject;
  } catch (error) {
    return validationErrorHandler(error);
  }
};

exports.updateTodoService = async (id, updateTodoObj) => {
  try {
    updateTodoObj.updatedAt = Date.now();
    let pizzaData = await todoModel.findOneAndUpdate(
      { todoId: id },
      updateTodoObj
    );
    let todo = await todoModel.find();
    let responseObject = await Object.freeze({
      success: true,
      data: pizzaData,
      message: `Todo updated successfully`,
      status: 201,
    });
    return responseObject;
  } catch (error) {
    return validationErrorHandler(error);
  }
};

exports.deleteTodoService = async (id) => {
  try {
    let todo = await todoModel.findOneAndDelete({ todoId: id });
    let responseObject = await Object.freeze({
      success: true,
      data: todo,
      message: `Todo deleted successfully`,
      status: 201,
    });
    return responseObject;
  } catch (error) {
    return validationErrorHandler(error);
  }
};
