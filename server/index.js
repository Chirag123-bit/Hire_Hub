// Routes Middleware
const userRoutes = require("./routes/userRoutes");
const videoRoute = require("./routes/videoRoute");
const companyRoute = require("./routes/companyRoute");
const jobRoute = require("./routes/jobRoute");
const chatRoute = require("./routes/chatRoute");
const messagesRoute = require("./routes/messageRoute");
const categoryRoute = require("./routes/categoryRoute");
const eventsRoute = require("./routes/eventRoute");
const todosRoute = require("./routes/todoRoute");

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
// app.use("/api/messages", messageRoute);
app.use("/api/video", videoRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/chat", chatRoute);
app.use("/api/message", messagesRoute);
app.use("/api/category", categoryRoute);
app.use("/api/event", eventsRoute);
app.use("/api/todo", todosRoute);
app.use("/uploads", express.static("uploads"));

// Server Initialization
const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

var clients = {};

// Socket Connection
const io = socket(server, {
  pingTimeout: 60000, //Close connection after 60s of inactivity
  cors: {
    origin: "*",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");

  socket.on("test", (res) => {
    console.log(res);
  });

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });
  socket.on("setupApp", (id) => {
    socket.join(id);
    socket.emit("connected");
    clients[id] = socket;
    //print length of clients
    console.log(Object.keys(clients).length);
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  socket.on("message", (data) => {
    let reciverId = data.reciverId;
    if (clients[reciverId]) {
      console.log("Sending Message to: " + reciverId);
      clients[reciverId].emit("message", data);
    }

    console.log(data);
  });

  socket.on("typing", (room) => {
    socket.in(room).emit("typing");
  });
  socket.on("stop typing", (room) => {
    socket.in(room).emit("stop typing");
  });

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;
    if (!chat.users) return console.log("Users not defined");

    chat.users.forEach((user) => {
      if (user._id === newMessageRecieved.sender._id) return;
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.off("setup", () => {
    console.log("User Disconnected");
    socket.leave(userData._id);
  });
});
