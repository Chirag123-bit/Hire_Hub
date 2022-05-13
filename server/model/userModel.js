const { default: mongoose } = require("mongoose");
const mongooge = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 3,
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
});

module.exports = mongooge.model("Users", userSchema);
