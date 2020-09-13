const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  labels: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Label"
    }],
    required: false
  },
  subTasks: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Task"
    }],
    required: false
  },
  parentTask: {
    type: {
      type: Schema.Types.ObjectId,
      ref: "Task"
    },
    required: false
  },
  isCompleted: {
    type: Boolean,
    required: true
  },
  isHead: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Task", TaskSchema);
