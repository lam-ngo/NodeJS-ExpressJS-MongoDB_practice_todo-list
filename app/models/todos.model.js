const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  date: Date,
  completed: Boolean
}, {
  timestamps: true
})

module.exports = mongoose.model('Todo', TodoSchema);
