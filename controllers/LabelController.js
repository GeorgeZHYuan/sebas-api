const express = require('express')
const router = express.Router()

const Label = require('../data/models/Label')

const controller = {}

controller.createLabel = async (req, res) => {
  const label = new Label(req.body)

  try {
    await label.save()
    res.status(201).send(label)

  } catch (e) {
    res.status(400).send(e)
  }
}

controller.getLabels = async (req, res) => {
  try {
    const labels = await Label.find()

    if (!labels) {
      res.status(404).send()
    }

    res.status(200).json(labels)
  } catch (e) {
    res.status(500).send()
  }
}

controller.getLabel = async (req, res) => {
  const filter = {_id: req.params.id}

  try {
    const label = await Label.findOne(filter)

    if (!label) {
      return res.status(404).send()
    }

    res.send(label)
  } catch (e) {
    res.status(500).send()
  }
}

controller.updateLabel = async (req, res) => {
  const filter = {_id: req.params.id}
  const update = {...req.body}

  try {
    const label = await Label.findOneAndUpdate(filter, update)
    res.send(label)

  } catch (e) {
    res.status(400).send(e)
  }
}

controller.deleteLabel = async (req, res) => {
  const filter = {_id: req.params.id}

  try {
    const label = await Label.findOneAndDelete(filter)

    if (!label) {
      return res.status(404).send()
    }

    res.send(label)
  } catch (e) {
    res.status(500).send()
  }
}

// Get array of tasks marked by the label
controller.getListedTasks = async (req, res) => {
  const filter = {_id: req.params.id}

  try {
    const label = await Label.findOne(filter)
      .populate("tasks")

    if (!label) {
      return res.status(404).send()
    }

    res.status(200).send(label.tasks)
  } catch(e) {
    res.status(500).send()
  }
}

module.exports = controller
