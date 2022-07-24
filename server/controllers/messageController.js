const asyncHandler = require("express-async-handler");
const Chat = require("../model/ChatModel");
const Message = require("../model/MsgModel");
const User = require("../model/userModel");

const sendMessage = asyncHandler(async (req, res) => {
  const { chatId, content } = req.body;
  if (!chatId || !content) {
    console.log("Invalid data");
    return res.status(400).json({
      error: "Please provide chatId and/or content",
    });
  }
  const userId = req.user.id;
  var newMessage = {
    sender: userId,
    content: content ?? " ",
    chat: chatId,
  };
  try {
    var message = await Message.create(newMessage);
    message = await message.populate(
      "sender",
      "firstName lastName avatarImage"
    );

    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "firstName lastName avatarImage email",
    });
    await Chat.findByIdAndUpdate(req.body.chatId, {
      latestMessage: message,
    });
    res.json(message);
  } catch (e) {
    res.status(400);
    throw new Error(e.message);
  }
});

const sendMessageApp = asyncHandler(async (req, res) => {
  const { chatId, content } = req.body;
  if (!chatId || !content) {
    console.log("Invalid data");
    return res.status(400).json({
      error: "Please provide chatId and/or content",
    });
  }
  const userId = req.user.id;
  var newMessage = {
    sender: userId,
    content: content ?? " ",
    chat: chatId,
  };
  try {
    var message = await Message.create(newMessage);
    message = await message.populate(
      "sender",
      "firstName lastName avatarImage"
    );

    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "firstName lastName avatarImage email",
    });
    await Chat.findByIdAndUpdate(req.body.chatId, {
      latestMessage: message,
    });
    res.status(200).json({ data: message });
  } catch (e) {
    res.status(400);
    throw new Error(e.message);
  }
});

const allMessages = asyncHandler(async (req, res) => {
  console.log(req.params.chatId);
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "firstName lastName avatarImage email")
      .populate("chat");

    res.json(messages);
  } catch (e) {
    res.status(400);
    throw new Error(e.message);
  }
});
const allMessagesApp = asyncHandler(async (req, res) => {
  console.log(req.params.chatId);
  try {
    const messages = await Message.find({ chat: req.params.chatId });

    res.status(200).json({ data: messages });
  } catch (e) {
    res.status(400);
    throw new Error(e.message);
  }
});

module.exports = { sendMessage, allMessages, allMessagesApp, sendMessageApp };
