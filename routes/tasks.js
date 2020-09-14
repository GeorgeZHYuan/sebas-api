const express = require('express')
const router = express.Router()

const Task = require('../controllers/TaskController')

router.route('/tasks')
  .post(Task.createTask)
  .get(Task.getAllTasks)

router.route('/tasks/:id')
  .get(Task.getOneTask)
  .patch(Task.updateOneTask)
  .delete(Task.deleteOneTask)

module.exports = router
