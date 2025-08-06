const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

console.log('Starting server...');
console.log('Connecting to MongoDB...');

const mongoURI = 'mongodb+srv://xueying:199772fxy@cluster0.bbmlovt.mongodb.net/tasksdb?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.use(express.json());
app.use(express.static('public'));

// Test root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define Task schema and model
const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});
const Task = mongoose.model('Task', taskSchema);

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
