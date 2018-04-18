const Todo = require('../models/todos.model.js');

// Create and Save a new todo
exports.create = (req, res) => {
  // Validate request
  if(!req.body.content) {
      return res.status(400).send({
          message: "Request content can not be empty!"
      });
  }

  // Create a todo
  const todo = new Todo({ req.body });

  // Save todo in the database
  todo.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the todo."
      });
  });
};

// Retrieve and return all todos from the database.
exports.findAll = (req, res) => {

};

// Find a single todo with a todoId
exports.findOne = (req, res) => {

};

// Update a todo identified by the todoId in the request
exports.update = (req, res) => {

};

// Delete a todo with the specified todoId in the request
exports.delete = (req, res) => {

};
