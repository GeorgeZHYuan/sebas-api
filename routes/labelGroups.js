const express = require('express')
const router = express.Router()

const LabelGroup = require('../models/LabelGroup')

router.route('/labelGroups')
  .post(async (req, res) => {
    const labelGroup = new LabelGroup(req.body)

    try {
      await labelGroup.save()
      res.status(201).send(labelGroup)

    } catch (e) {
      res.status(400).send(e)
    }
  })
  .get(async (req, res) => {
    try {
      const labelGroups = await LabelGroup.find()

      if (!labelGroups) {
        res.status(404).send()
      }

      res.status(200).json(labelGroups)
    } catch (e) {
      res.status(500).send()
    }
  })

router.route('/labelGroups/:id')
  .get(async (req, res) => {
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
  })
  .patch(async (req, res) => {
    const filter = {_id: req.params.id}
    const update = {...req.body}

    try {
      const labelGroup = await LabelGroup.findOneAndUpdate(filter, update)
      res.send(labelGroup)

    } catch (e) {
      res.status(400).send(e)
    }
  })
  .delete(async (req, res) => {
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
  })

module.exports = router
