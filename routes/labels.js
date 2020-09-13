const express = require('express')
const router = express.Router()

const Label = require('../models/Label')

router.post('/tasks', async (req, res) => {
  const task = new Label(req.body)

  try {
    await task.save()
    res.status(201).send(task)
    
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Label.find()

    if (!tasks) {
      res.status(404).send()
    }

    res.status(200).json(tasks)
  } catch (e) {
    res.status(500).send()
  }
})

router.get('/tasks/:id', async (req, res) => {
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
})

router.patch('/tasks/:id', async (req, res) => {
  const filter = {_id: req.params.id}
  const update = {...req.body}

  try {
    const task = await Label.findOneAndUpdate(filter, update)
    res.send(task)

  } catch (e) {
    res.status(400).send(e)
  }
})

router.delete('/tasks/:id', async (req, res) => {
  const filter = {_id: req.params.id}

  try {
    const task = await Label.findOneAndDelete(filter)

    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router
