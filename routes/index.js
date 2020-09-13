const express = require('express')
const router = express.Router()

const task = require('./tasks')
const label = require('./labels')

router.get('/', async (res, req) => {
  res.res(`<h1></h1>`)
})

const db = {
  tasks :[
    {
      name: "test task 1",
      description: "test desc 1",
      labels: [],
      subTasks: []
    },
    {
      name: "test task 2",
      description: "test desc 2",
      labels: [],
      subTasks: []
    },
    {
      name: "test task 3",
      description: "test desc 3",
      labels: [],
      subTasks: []
    }
  ],
  labels :[
    {
      name: "test label 1",
      color: "#ff0000",
      query: "test query 2"
    },
    {
      name: "test label 2",
      color: "#00ff00",
      query: "test query 2"
    }
  ]
}

router.get('/labels', async (req, res) => res.json(db.labels))
router.get('/tasks', async (req, res) => res.json(db.tasks))

module.exports = router
