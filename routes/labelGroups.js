const express = require('express')
const router = express.Router()

const LabelGroup = require('../controllers/LabelGroupController')

router.route('/labelGroups')
  .post(LabelGroup.createLabelGroup)
  .get(LabelGroup.getLabelGroups)

router.route('/labelGroups/:id')
  .get(LabelGroup.getLabelGroup)
  .patch(LabelGroup.updateLabelGroup)
  .delete(LabelGroup.deleteLabelGroup)

router.route('/labelGroups/:id/labels')
  .get(LabelGroup.getListedLabels)

module.exports = router
