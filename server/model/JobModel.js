const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },
  about: {
    type: String,
    required: true,
    min: 3,
  },
  skills: [
    {
      type: String,
    },
  ],
  sallary: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  responsibilities: [
    {
      type: String,
    },
  ],
  requirements: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Job", jobSchema);
