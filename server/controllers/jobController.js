const express = require("express");
const router = new express.Router();
const Job = require("../model/JobModel");
const Company = require("../model/CompanyModel");

module.exports.addJob = async (req, res, next) => {
  try {
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
        // CompanyModel.update({ _id: company }, { $push: { jobs: result._id } });
        Company.findOne({ _id: company })
          .then((result) => {
            result.jobs.push(job);
            result.save();
            console.log("Done");
            return res.json({
              success: true,
              data: result,
              msg: "The Job was added successfully",
            });
          })

          .catch((err) => {
            result.deleteOne();
            return res.json({
              success: false,
              msg: "The Job was not added successfully",
            });
          });
      })
      .catch((error) => {
        console.log(error);
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

module.exports.getCompanyJobs = async (req, res, next) => {
  try {
    //get jobs of company using company id
    const jobArray = req.query.jobsArray;

    const jobs = await Job.find({ _id: { $in: jobArray } });

    return res.json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    return res.json({
      success: false,
      error: error,
      msg: error,
    });
  }
};
