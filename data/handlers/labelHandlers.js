const Label = require("../schemas/Label")

const label = {}

const labels.getAll = async () => {
  return await Label.find({}).exec()
}

const labels.getById = async (id) => {
  return await Label.findById(id).exec()
}

export default labels
