const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  
  totaltask: {
    type: Number,
    trim: true,
    required: true,
  },
  completedtask: {
    type: Number,
    trim: true,
    required: true,
  },
  pendingtasks: {
    type: Number,
    trim: true,
    required: true,
  },

 
});

const Counting = mongoose.model("Couting", CategorySchema);
module.exports = Category;
