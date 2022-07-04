const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },
  note: {
    type: String,
    required: true,
    min: 3,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },

  color: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
