const express = require('express')
const router = express.Router()

const LabelGroup = require('../controllers/LabelGroupController')

router.route('/labelGroups')
  .post(LabelGroup.createLabelGroup)
  .get(LabelGroup.getAllLabelGroups)

router.route('/labelGroups/:id')
  .get(LabelGroup.getOneLabelGroup)
  .patch(LabelGroup.updateOneLabelGroup)
  .delete(LabelGroup.deleteOneLabelGroup)

router.route('/labelGroups/:id/labels')
  .get(LabelGroup.getListedLabels)

module.exports = router
