const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  const { task,category,duedate,priority,reminderdate,status,description,email } = req.body;

  if (!(task &&  category&& duedate && priority && reminderdate&&status && description,email)) {
    return res.status(400).send({ message: "Please fill all the input" });
  }

  try {
    
    

    // If roll number doesn't exist, create a new Todo entry
    const user = new Todo({
      task,category,duedate,priority,reminderdate,status,description,email
    });

    const savedUser = await user.save();
    res.status(201).json({
      message: 'Todo created successfully!!',
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create Todo', error: error.message });
  }
};
const getAllTodo = async (req, res) => {
  try {
    const emailValue = req.body.email; // Assuming you get the email value from the request query
  
      // Modify the find query to filter todos by a specific email value
      const todos = await Todo.find({ email: emailValue });

  // Retrieve Todo items based on the query
    res.status(201).send({
      Todo: todos,
      message: "Todo Fetch Successfull",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const deleteTodo = async (req, res) => {
  try {
    // Check if the state exists
    const deletedResource = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedResource) {
      return res.status(404).json({ error: "Resource not found" });
    }

    res.status(200).send({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const stateId = req.params.id;
    const { task,category,duedate,priority,reminderdate,status,description,email } = req.body;
    if (!(task &&  category&& duedate && priority && reminderdate&&status && description)) {
      return res.status(400).send({ message: "Please fill all the input" });
    }
    // Find the state by its ID
    const state = await Todo.findById(stateId);
    if (!state) {
      return res.status(404).send({ error: "Student information not found" });
    }
    

    // Update the fields
    
      state.task = task;
      state.category = category;
      state.duedate = duedate;
      state.priority = priority;
      state.reminderdate = reminderdate;
      state.status = status;
      state.description = description;
  
    
   

    // Save the updated state
    await state.save();

    res.status(200).send({
      state,
      message: "Todo updated successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = { createTodo, getAllTodo, deleteTodo, updateTodo };
