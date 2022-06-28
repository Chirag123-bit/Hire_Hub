const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
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
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  color: {
    type: Number,
    default: 1,
  },
  remind: {
    type: Number,
    default: 0,
  },
  repeat: {
    type: String,
    default: "none",
  },
});

module.exports = mongoose.model("Event", eventSchema);
