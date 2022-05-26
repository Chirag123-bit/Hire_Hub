const express = require("express");
const router = new express.Router();
const jobModel = require("../model/JobModel");

module.exports.addJob = async (req, res, next) => {
  try {
    const {
      title,
      about,
      skills,
      sallary,
      description,
      responsibilities,
      requirements,
    } = req.body;
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};
