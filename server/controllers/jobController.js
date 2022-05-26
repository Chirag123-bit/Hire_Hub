const express = require("express");
const router = new express.Router();
const Job = require("../model/JobModel");

module.exports.addJob = async (req, res, next) => {
  try {
    console.log("Hre");
    const {
      title,
      about,
      sallary,
      description,
      skills,
      requirements,
      responsibilities,
      closeTime,
      company,
    } = req.body;
    const job = new Job({
      title: title,
      about: about,
      sallary: sallary,
      description: description,
      skills: skills,
      requirements: requirements,
      responsibilities: responsibilities,
      closeDate: closeTime,
      company: company,
    });
    job
      .save()
      .then((result) => {
        console.log(result);
        return res.json({
          success: true,
          data: result,
          msg: "The Job was added successfully",
        });
      })
      .catch((error) => {
        return res.json({
          success: false,
          error: error,
          msg: "Failed to add job",
        });
      });
  } catch (error) {
    return res.json({
      success: false,
      error: error,
      msg: "Something went wrong",
    });
  }
};
