const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
    min: 3,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
  },
  gender: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 3,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 10,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  professional: [
    {
      title: {
        type: String,
      },
      sector: {
        type: String,
      },
      skill: [
        {
          type: String,
        },
      ],
      description: {
        type: String,
      },
    },
  ],
  additional: [
    {
      education: [
        {
          degree: {
            type: String,
          },
          college: {
            type: String,
          },
          startDate: {
            type: String,
          },
          endDate: {
            type: String,
          },
        },
      ],
      experience: [
        {
          job_title: {
            type: String,
          },
          company: {
            type: String,
          },
          company_location: {
            type: String,
          },
          startDate: {
            type: String,
          },
          endDate: {
            type: String,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Users", userSchema);
