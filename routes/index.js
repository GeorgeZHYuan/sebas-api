const express = require('express')
const router = express.Router()

const taskRouter = require('./tasks')
const labelRouter = require('./labels')

router.get('/', async (req, res) => {
  res.send(`<h1>Sebas API</h1>`)
})

router.use(taskRouter)
router.route(labelRouter)

module.exports = router
