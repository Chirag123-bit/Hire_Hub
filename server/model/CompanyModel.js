const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  user: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
    min: 3,
  },
  country: {
    type: String,
    required: true,
    min: 3,
  },
  region: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
    max: 50,
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
      "https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Company", companySchema);
