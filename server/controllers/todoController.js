const express = require("express");
const router = new express.Router();
const todoModel = require("../model/TodoModels");
const userModel = require("../model/userModel");
const asyncHandler = require("express-async-handler");

module.exports.addTodo = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;

  const event = todoModel({
    title: req.body.title,
    note: req.body.note,
  });
  userModel
    .findById(usr)
    .then((result) => {
      event.save().then((ev) => {
        result.todos.push({ event });
        result.save();
        return res.status(200).json({
          success: true,
          data: event,
          msg: "Todo was added successfully",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        success: false,
        msg: "Error Adding Todo",
      });
    });
});

//get events of a user
module.exports.getTodos = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;
  var events = await userModel.findById(usr).populate("todos.event").select({
    todos: 1,
    _id: 0,
  });

  if (!events) {
    res.status(400).send("Applied Jobs not found");
  } else {
    res.status(200).send(events);
  }
});

//update event to completed
module.exports.updateTodo = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;
  const event = await todoModel.findById(req.body.id);
  console.log(usr);
  if (!event) {
    res.status(400).send("Event not found");
  } else {
    const new_val = !event.isCompleted;
    event.isCompleted = new_val;
    event
      .save()
      .then((ev) => {
        return res.status(200).json({
          success: true,
          data: event,
          msg: "The Todo was updated successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          success: false,
          msg: "Error Updating Todo",
        });
      });
  }
});

//delete event
module.exports.deleteEvent = asyncHandler(async (req, res, next) => {
  console.log(req.params.id);
  const usr = await req.user._id;
  const user = await userModel.findById(usr);
  const event = await todoModel.findById(req.params.id);

  if (!event) {
    res.status(400).send("Event not found");
  } else {
    user.todos.pull({ event: event });
    user
      .save()
      .then((usr) => {
        // event.remove().then((ev) => {
        //   return res.status(200).json({
        //     success: true,
        //     data: event,
        //     msg: "The Event was deleted successfully",
        //   });
        // });
        return res.status(200).json({
          success: true,
          data: event,
          msg: "The Event was deleted successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          success: false,
          msg: "Error Deleting Event",
        });
      });
  }
});

module.exports.deleteTodo = asyncHandler(async (req, res, next) => {
  console.log(req.params.id);
  const usr = await req.user._id;
  const user = await userModel.findById(usr);
  const event = await todoModel.findById(req.body.id);

  if (!event) {
    res.status(400).send("Todo not found");
  } else {
    // user.todos.pull({ event: event });
    await user.update({ $pull: { todos: { event: event._id } } });
    user
      .save()
      .then((usr) => {
        return res.status(200).json({
          success: true,
          data: event,
          msg: "The Todo was deleted successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          success: false,
          msg: "Error Deleting Todo",
        });
      });
  }
});
