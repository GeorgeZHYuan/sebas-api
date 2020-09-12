const Label = require("../schemas/Label")

const label = {}

label.getAll = async () => {
  return await Label.find({}).exec()
}

label.getById = async (id) => {
  return await Label.findById(id).exec()
}

module.exports = label
