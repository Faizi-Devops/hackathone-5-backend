const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  
  task: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    trim: true,
    required: true,
  },
  duedate: {
    type: String,
    trim: true,
    required: true,
  },
  priority: {
    type: String,
    trim: true,
    required: true,
  },
  reminderdate: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },

});

const Todo = mongoose.model("AllData", todoSchema);
module.exports = Todo;
