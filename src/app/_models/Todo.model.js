
import mongoose from 'mongoose';


const todoSchema = new mongoose.Schema({
  
  todo: {
    type: String,
    required: [true, 'todo is required'],
  }
});

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);


export default Todo