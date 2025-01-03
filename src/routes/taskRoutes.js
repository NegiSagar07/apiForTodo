const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskStatus,
  deleteTask
} = require('../controllers/taskController');

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTaskStatus);
router.delete('/:id', deleteTask);

module.exports = router;