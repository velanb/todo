/**
 * Importing the required modules
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  todoId: {
    type: String,
    required: [true, "Todo id is required"],
  },
  todoName: {
    type: String,
    required: [true, "Todo name is required"],
    maxlength: [50, "The todo length out of limit"],
  },
  todoDescription: {
    type: String,
    required: [true, "Todo description is required"],
    maxlength: [500, "The todo description length out of limit"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comletedAt: {
    type: Date,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("ToDo", todoSchema);
