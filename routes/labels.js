const express = require('express')
const router = express.Router()

const Label = require('../models/Label')

router.route('/labels')
  .post(async (req, res) => {
    const label = new Label(req.body)

    try {
      await label.save()
      res.status(201).send(label)

    } catch (e) {
      res.status(400).send(e)
    }
  })
  .get(async (req, res) => {
    try {
      const labels = await Label.find()

      if (!labels) {
        res.status(404).send()
      }

      res.status(200).json(labels)
    } catch (e) {
      res.status(500).send()
    }
  })

router.route('/labels/:id')
  .get(async (req, res) => {
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
  })
  .patch(async (req, res) => {
    const filter = {_id: req.params.id}
    const update = {...req.body}

    try {
      const label = await Label.findOneAndUpdate(filter, update)
      res.send(label)

    } catch (e) {
      res.status(400).send(e)
    }
  })
  .delete(async (req, res) => {
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
  })

module.exports = router
