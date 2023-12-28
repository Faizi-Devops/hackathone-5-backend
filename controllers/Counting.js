const Todo = require("../models/Counting");

const createCounting = async (req, res) => {
  const { email } = req.body;

  if (!(totaltask &&  completedtask&& pendingtasks && email)) {
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