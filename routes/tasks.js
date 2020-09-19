const express = require('express')
const router = express.Router()

const Task = require('../controllers/TaskController')

router.route('/tasks')
  .post(Task.createTask)
  .get(Task.getTasks)

router.route('/tasks/:id')
  .get(Task.getTask)
  .patch(Task.updateTask)
  .delete(Task.deleteTask)

module.exports = router
