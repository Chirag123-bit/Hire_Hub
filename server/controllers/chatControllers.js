const asyncHandler = require("express-async-handler");
const Chat = require("../model/ChatModel");
const User = require("../model/userModel");

const accessChat = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;
  console.log(userId, req.user._id.toString());
  if (!userId) {
    return res.status(400).send("Please provide userId");
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    users: {
      $all: [req.user._id.toString(), userId],
    },
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "username avatarImage email",
  });
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const fullChat = await Chat.findById(createdChat._id).populate(
        "users",
        "-password"
      );
      res.status(200).send(fullChat);
    } catch (error) {
      //   res.status(400).send(error);
      throw new Error(e.message);
    }
  }
});

const accessChatApp = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).send("Please provide userId");
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    users: {
      $all: [req.user._id.toString(), userId],
    },
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "username avatarImage email",
  });
  if (isChat.length > 0) {
    res.status(200).json({ data: isChat[0]._id });
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);

      res.status(200).json({ data: createdChat._id });
    } catch (error) {
      //   res.status(400).send(error);
      throw new Error(e.message);
    }
  }
});

const fetchChats = asyncHandler(async (req, res, next) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (result) => {
        result = await User.populate(result, {
          path: "latestMessage.sender",
          select: "username avatarImage email",
        });
        res.status(200).send(result);
      });
  } catch (e) {
    res.status(400);
    throw new Error(e.message);
  }
});

const fetchChatsApp = asyncHandler(async (req, res, next) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (result) => {
        result = await User.populate(result, {
          path: "latestMessage.sender",
          select: "username avatarImage email additional professional",
        });
        res.status(200).json({ data: result });
      });
  } catch (e) {
    res.status(400);
    throw new Error(e.message);
  }
});

const createGroupChat = asyncHandler(async (req, res, next) => {
  if (!req.body.groupName || !req.body.users) {
    return res.status(400).send("Please fill the form properly");
  }
  var users = JSON.parse(req.body.users);

  if (users.length < 2) {
    return res.status(400).send("Please select atleast two users");
  }

  users.push(req.user);
  try {
    const groupChat = await Chat.create({
      chatName: req.body.groupName,
      isGroupChat: true,
      users: users,
      groupAdmin: req.user,
    });
    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.status(200).json(fullGroupChat);
  } catch (e) {
    res.status(400);
    throw new Error(e.message);
  }
});

const renameGroup = asyncHandler(async (req, res, next) => {
  const { chatId, chatName } = req.body;

  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    { chatName: chatName },
    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!updatedChat) {
    res.status(400).send("Chat not found");
  } else {
    res.status(200).send(updatedChat);
  }
});

const addToGroup = asyncHandler(async (req, res, next) => {
  const { chatId, userId } = req.body;

  const added = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },

    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!added) {
    res.status(400).send("Chat not found");
  } else {
    res.status(200).send(added);
  }
});

const removeFromGroup = asyncHandler(async (req, res, next) => {
  const { chatId, userId } = req.body;

  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },

    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removed) {
    res.status(400).send("Chat not found");
  } else {
    res.status(200).send(removed);
  }
});

module.exports = {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
  fetchChatsApp,
  accessChatApp,
};
