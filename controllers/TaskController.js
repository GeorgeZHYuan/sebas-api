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
  try {
    const tasks = await Task.find()

    if (!tasks) {
      res.status(404).send()
    }

    res.status(200).json(tasks)
  } catch (e) {
    res.status(500).send()
  }
}

controller.getTask = async (req, res) => {
  const filter = {_id: req.params.id}

  try {
    const task = await Task.findOne(filter)

    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
}

controller.updateTask = async (req, res) => {
  const filter = {_id: req.params.id}
  const update = {...req.body}

  try {
    const task = await Task.findOneAndUpdate(filter, update)
    res.send(task)

  } catch (e) {
    res.status(400).send(e)
  }
}

controller.deleteTask = async (req, res) => {
  const filter = {_id: req.params.id}

  try {
    const task = await Task.findOneAndDelete(filter)

    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
}

module.exports = controller
