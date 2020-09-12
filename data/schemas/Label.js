const mongoose = require("mongoose")

const Schema = mongoose.Schema

const LabelSchema = new Schema ({
  labelName: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  markedTasks: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Task"
    }],
    required: false
  }
})

module.exports = mongoose.model("Label", LabelSchema)
