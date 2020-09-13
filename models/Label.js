const mongoose = require("mongoose")

const Schema = mongoose.Schema

const LabelSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  tasks: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Task"
    }],
    required: false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Label", LabelSchema)
