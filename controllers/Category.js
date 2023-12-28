const Todo = require("../models/Category");

const createCategory = async (req, res) => {
    const { category,email } = req.body;
  
   
  
    try {
     
      
  
      // If roll number doesn't exist, create a new Todo entry
      const user = new Todo({
        category,
        email
       
      });
  
      const savedUser = await user.save();
      res.status(201).json({
        message: 'Category created successfully!!',
        user: savedUser,
        status:"201"
      });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create Category', error: error.message });
    }
  };
  const getAllCategory = async (req, res) => {
    try {
      const states = await Todo.find();
      res.status(200).send({
        Todo: states,
        message: "Category Successfully",
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const getCategorybysearch = async (req, res) => {
    try {
      const emailValue = req.body.email; // Assuming you get the email value from the request query
  
      // Modify the find query to filter todos by a specific email value
      const todos = await Todo.find({ email: emailValue });
  
      if (todos.length === 0) {
        return res.status(404).json({ message: "No todos found for this email" });
      }
  
      res.status(200).send({
        Todos: todos,
        message: "Category retrieved for the specified email",
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

  const deleteCategory = async (req, res) => {
    try {
      // Check if the state exists
      const deletedResource = await Todo.findByIdAndDelete(req.params.id);
      if (!deletedResource) {
        return res.status(404).json({ error: "Resource not found" });
      }
  
      res.status(200).send({ message: "Category deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  const updateCategory = async (req, res) => {
    try {
      const stateId = req.params.id;
      const { category } = req.body;
     
      // Find the state by its ID
      const state = await Todo.findById(stateId);
      if (!state) {
        return res.status(404).send({ error: "Category not found" });
      }
      
  
      // Update the fields
      if (category !== undefined) {
        state.category = category;
      }
     
  
      // Save the updated state
      await state.save();
  
      res.status(200).send({
        state,
        message: "Category updated successfully",
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

  module.exports = {createCategory,getAllCategory,deleteCategory,updateCategory,getCategorybysearch}