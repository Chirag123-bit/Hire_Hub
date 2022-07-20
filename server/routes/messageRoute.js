const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
const {
  allMessages,
  sendMessage,
  allMessagesApp,
  sendMessageApp,
} = require("../controllers/messageController");

router.route("/").post(protect, sendMessage);
router.route("/app").post(protect, sendMessageApp);
router.route("/:chatId").get(protect, allMessages);
router.route("/app/:chatId").get(protect, allMessagesApp);

module.exports = router;
