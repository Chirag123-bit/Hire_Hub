const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageController");

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
