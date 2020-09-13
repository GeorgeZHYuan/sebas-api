const mongoose = require("mongoose")

const Schema = mongoose.Schema

const LabelGroupSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  labels: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Label"
    }],
    required: false
  }
})

module.exports = mongoose.model("LabelGroup", LabelGroupSchema)
