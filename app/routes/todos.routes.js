module.exports = (app) => {
  const todos = require('../controllers/todos.controller.js');

  // Create a new todo
  app.post('/todos', todos.create);

  // Retrieve all todos
  app.get('/todos', todos.findAll);

  // Retrieve a single todo with todo Id
  app.get('/todos/:todoId', todos.findOne);

  // Update a todo with todoId
  app.put('/todos/:todoId', todos.update);

  // Delete a todo with todoId
  app.delete('/todos/:todoId', todos.delete);
}
