const Task = require("../schemas/Task")

const task = {}

const task.getAll = async () => {
  return await Task.find({}).exec()
}

const task.getById = async (id) => {
  return await Task.findById(id).exec()
}

export default task
