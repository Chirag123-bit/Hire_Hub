// Routes Middleware
const userRoutes = require("./routes/userRoutes");
const messageRoute = require("./routes/messagesRoute");
const videoRoute = require("./routes/videoRoute");
const companyRoute = require("./routes/companyRoute");
const jobRoute = require("./routes/jobRoute");
const chatRoute = require("./routes/chatRoute");

//Socket Connection
const socket = require("socket.io");
const cors = require("cors");

//Database and Express Connection
const express = require("express");
require("./database/connection");

//Initialize Express instance
const app = express();

// Import secret keys and config from dotenv
require("dotenv").config();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes Setup
app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoute);
app.use("/api/video", videoRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/chat", chatRoute);

// Server Initialization
const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

// Socket Connection
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recive", data.message);
    }
  });

  socket.on("join-room", ({ roomId, userId }) => {
    const clientsInRoom = io.in(roomId).allSockets();
    if (!userId in clientsInRoom) {
      socket.join(roomId);
    }
    socket.broadcast.to(roomId).emit("user-connected", userId);
  });
});
