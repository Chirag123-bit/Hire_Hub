const mongooge = require("mongoose");

const UserVerificationSchema = mongooge.Schema({
  userId: String,
  uniqueString: String,
  createdAt: Date,
  expiresAt: Date,
});

const userVerification = mongooge.model(
  "UserVerification",
  UserVerificationSchema
);

module.exports = userVerification;
