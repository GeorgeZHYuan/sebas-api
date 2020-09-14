const express = require('express')
const router = express.Router()

const Label = require('../controllers/LabelController')

router.route('/labels')
  .post(Label.createLabel)
  .get(Label.getAllLabels)

router.route('/labels/:id')
  .get(Label.getOneLabel)
  .patch(Label.updateOneLabel)
  .delete(Label.deleteOneLabel)

module.exports = router
