const Task = require("../schemas/Task")

const task = {}

task.getAll = async () => {
  return await Task.find({}).exec()
}

task.getById = async (id) => {
  return await Task.findById(id).exec()
}

module.exports = task
