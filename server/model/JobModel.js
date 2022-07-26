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
  sector: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    // type: String,
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
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  openDate: {
    type: Date,
    default: Date.now,
  },
  closeDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  applicants: [
    {
      applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
      status: {
        type: String,
        default: "New",
      },
      appliedDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("Job", jobSchema);
