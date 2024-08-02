const mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

//Export the model
module.exports = mongoose.model("Task", taskSchema);
