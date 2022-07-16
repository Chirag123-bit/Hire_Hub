const express = require("express");
const router = new express.Router();
const eventModel = require("../model/EventModel");
const userModel = require("../model/userModel");
const asyncHandler = require("express-async-handler");

module.exports.addEvents = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;
  console.log(req.body);
  const event = eventModel({
    title: req.body.title,
    note: req.body.note,
    isCompleted: req.body.isCompleted,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    color: req.body.color,
    remind: req.body.remind,
    repeat: req.body.repeat,
  });
  userModel
    .findById(usr)
    .then((result) => {
      event.save().then((ev) => {
        result.events.push({ event });
        result.save();
        return res.status(200).json({
          success: true,
          data: event,
          msg: "The Event was added successfully",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        success: false,
        msg: "Error Adding Event",
      });
    });
});

//get events of a user
module.exports.getEvents = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;
  var events = await userModel.findById(usr).populate("events.event").select({
    events: 1,
    _id: 0,
  });

  if (!events) {
    res.status(400).send("Applied Jobs not found");
  } else {
    res.status(200).send(events);
  }
});

//update event to completed
module.exports.updateEvent = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;
  const event = await eventModel.findById(req.body.id);
  console.log(usr);
  if (!event) {
    res.status(400).send("Event not found");
  } else {
    event.isCompleted = true;
    event
      .save()
      .then((ev) => {
        return res.status(200).json({
          success: true,
          data: event,
          msg: "The Event was updated successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          success: false,
          msg: "Error Updating Event",
        });
      });
  }
});

//delete event
module.exports.deleteEvent = asyncHandler(async (req, res, next) => {
  console.log(req.params.id);
  const usr = await req.user._id;
  const user = await userModel.findById(usr);
  const event = await eventModel.findById(req.params.id);
  console.log(event);

  if (!event) {
    res.status(400).send("Event not found");
  } else {
    await user.update({ $pull: { events: { event: event._id } } });
    user
      .save()
      .then((usr) => {
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
