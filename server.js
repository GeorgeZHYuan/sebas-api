const express = require('express')

const app = express()

const port = process.env.PORT || 5000;

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

app.get('/api/labels', (req, res) => res.json(db.labels))
app.get('/api/tasks', (req, res) => res.json(db.tasks))

app.listen(port, () => console.log(`Server running on port ${port}`))
