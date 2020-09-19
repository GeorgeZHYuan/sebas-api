const express = require('express')
const router = express.Router()

const LabelGroup = require('../data/models/LabelGroup')

const controller = {}

controller.createLabelGroup = async (req, res) => {
  const labelGroup = new LabelGroup(req.body)

  try {
    await labelGroup.save()
    res.status(201).send(labelGroup)

  } catch (e) {
    res.status(500).send(e)
  }
}

controller.getLabelGroups = async (req, res) => {
  try {
    const labelGroups = await LabelGroup.find()
      .populate("labels")

    if (!labelGroups) {
      res.status(404).send()
    }

    res.status(200).json(labelGroups)
  } catch (e) {
    res.status(500).send()
  }
}

controller.getLabelGroup = async (req, res) => {
  const filter = {_id: req.params.id}

  try {
    const labelGroup = await LabelGroup.findOne(filter)

    if (!labelGroup) {
      return res.status(404).send()
    }

    res.send(labelGroup)
  } catch (e) {
    res.status(500).send()
  }
}

controller.updateLabelGroup = async (req, res) => {
  const filter = {_id: req.params.id}
  const update = {...req.body}

  try {
    const labelGroup = await LabelGroup.findOneAndUpdate(filter, update)
    res.send(labelGroup)

  } catch (e) {
    res.status(500).send(e)
  }
}

controller.deleteLabelGroup = async (req, res) => {
  const filter = {_id: req.params.id}

  try {
    const labelGroup = await LabelGroup.findOneAndDelete(filter)

    if (!labelGroup) {
      return res.status(404).send()
    }

    res.send(labelGroup)
  } catch (e) {
    res.status(500).send()
  }
}

// Get array of labels listed by the label group
controller.getListedLabels = async (req, res) => {
  const filter = {_id: req.params.id}

  try {
    const labelGroup = await LabelGroup.findOne(filter)
      .populate("labels")

    if (!labelGroup) {
      return res.status(404).send()
    }

    res.status(200).send(labelGroup.labels)
  } catch(e) {
    res.status(500).send()
  }
}

module.exports = controller
