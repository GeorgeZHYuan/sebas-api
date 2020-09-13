const express = require('express')
const router = express.Router()

const taskRouter = require('./tasks')
const labelRouter = require('./labels')
const labelGroupRouter = require('./labelGroups')

router.get('/', async (req, res) => {
  res.send(`<h1>Sebas API</h1>`)
})

router.use(taskRouter)
router.use(labelRouter)
router.use(labelGroupRouter)

module.exports = router
