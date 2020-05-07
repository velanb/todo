class TodoServiceError extends Error {
  constructor(message) {
    super(message);
  }
}

class TodoControllerError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = { TodoServiceError, TodoControllerError };
