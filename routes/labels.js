const express = require('express')
const router = express.Router()

const Label = require('../controllers/LabelController')

router.route('/labels')
  .post(Label.createLabel)
  .get(Label.getLabels)

router.route('/labels/:id')
  .get(Label.getLabel)
  .patch(Label.updateLabel)
  .delete(Label.deleteLabel)

router.route('/labels/:id/tasks')
  .get(Label.getListedTasks)

module.exports = router
