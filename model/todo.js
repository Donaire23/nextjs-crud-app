import mongoose from "mongoose";

// Define the todo schema
const TaskSchema = new mongoose.Schema({

  Tasks: {

    type: String,
    required: true

  }
  
});


const MyTask =  mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default MyTask

// pass: eytDGju4FRtoI3ij, username: fkad