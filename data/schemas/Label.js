const mongoose = require("mongoose")

const Schema = mongoose.TaskSchema

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

export mongoose.model("Label", LabelSchema)
