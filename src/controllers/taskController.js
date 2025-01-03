const Task = require('../models/Task');

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    
    if (!title?.trim()) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const taskId = await Task.create(title, description);
    const task = await Task.findById(taskId);
    
    res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'in-progress', 'completed'];
    
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({ 
        error: 'Invalid status. Must be: pending, in-progress, or completed' 
      });
    }

    const changes = await Task.updateStatus(req.params.id, status);
    if (!changes) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const updatedTask = await Task.findById(req.params.id);
    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const changes = await Task.delete(req.params.id);
    if (!changes) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskStatus,
  deleteTask
};