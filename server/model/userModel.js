const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  company: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
    min: 3,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
  },
  gender: {
    type: String,
    required: true,
  },
  type: {
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
    default: true,
  },
  avatarImage: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
  },
  isVerified: {
    type: Boolean,
    default: true,
  },
  professional: {
    title: {
      type: String,
    },
    sector: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    summary: {
      type: String,
    },
  },

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
          work_type: {
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
  appliedJobs: [
    {
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
      appliedDate: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        default: "New",
      },
    },
  ],

  savedJobs: [
    {
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
      savedDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  events: [
    {
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
      savedDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  todos: [
    {
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo",
      },
      savedDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("Users", userSchema);
