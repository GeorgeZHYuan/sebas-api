const express = require('express')
const router = express.Router()

const Task = require('../data/models/Task')

const controller = {}

controller.createTask = async (req, res) => {
  const task = new Task(req.body)

  try {
    await task.save()
    res.status(201).send(task)

  } catch (e) {
    res.status(400).send(e)
  }
}

controller.getTasks = async (req, res) => {
  const filters = (req.query['labels']) ? {
    $and: req.query.labels.split(' ').map(labelId => {
      return {
        labels: {
          $in: [labelId]
        }
      }
    })
  } : {}

  try {
    const tasks = await Task.find(filters)

    if (!tasks) {
      res.status(404).send()
    }

    res.status(200).json(tasks)
  } catch (e) {
    res.status(500).send()
  }
}

controller.getTask = async (req, res) => {
  const filters = {_id: req.params.id}

  try {
    const task = await Task.findOne(filters)

    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
}

controller.updateTask = async (req, res) => {
  const filters = {_id: req.params.id}
  const update = {...req.body}

  try {
    const task = await Task.findOneAndUpdate(filters, update)
    res.send(task)

  } catch (e) {
    res.status(400).send(e)
  }
}

controller.deleteTask = async (req, res) => {
  const filters = {_id: req.params.id}

  try {
    const task = await Task.findOneAndDelete(filters)

    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
}

module.exports = controller
