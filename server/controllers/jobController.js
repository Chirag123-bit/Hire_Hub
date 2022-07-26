const express = require("express");
const router = new express.Router();
const Job = require("../model/JobModel");
const Company = require("../model/CompanyModel");
const userModel = require("../model/userModel");
const util = require("util");
const asyncHandler = require("express-async-handler");

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
      sector,
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
      sector: sector,
    });
    job
      .save()
      .then((result) => {
        // CompanyModel.update({ _id: company }, { $push: { jobs: result._id } });
        Company.findOne({ _id: company })
          .then((result) => {
            result.jobs.push(job);
            result.save();
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
    Company.findById(req.query.user)
      .select("jobs")
      .then((result) => {
        const jobArray = result["jobs"];
        Job.find({ _id: { $in: jobArray } })
          .then((result) => {
            return res.json({
              success: true,
              data: result,
            });
          })
          .catch((err) => {
            return res.json({
              success: false,
              msg: err,
            });
          });
      });
  } catch (error) {
    return res.json({
      success: false,
      error: error,
      msg: error,
    });
  }
};

module.exports.getAllJobs = async (req, res, next) => {
  try {
    Job.find()
      .populate("company")
      .populate("sector")
      .then((result) => {
        console.log(result);
        return res.json({
          success: true,
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);

        return res.json({
          success: false,
          msg: err,
        });
      });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: error,
      msg: error,
    });
  }
};

module.exports.getJobsForSpecificSector = async (req, res, next) => {
  try {
    const jobs = await Job.find({ sector: req.query.sector });
    return res.json({
      success: true,
      data: jobs,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: error,
    });
  }
};

module.exports.getJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.query.id).populate("company");
    return res.json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: error,
    });
  }
};

module.exports.applyForJob = async (req, res, next) => {
  try {
    // var appliedJobId = req.body.params.job;
    const { job } = req.body;
    // try {
    //   const { job } = req.body.params;
    //   appliedJobId = job;
    // } catch (error) {}

    // try {
    //   const { job } = req.body;
    //   appliedJobId = job;
    // } catch (error) {}
    // console.log(appliedJobId);

    const user = req.user._id;
    const appliedJob = await Job.findById(job);

    const appliedUser = await userModel.findById(user);

    if (appliedJob.applicants) {
      const isApplyable = verifyNewApplicant(appliedJob, user);
      console.log("Status: ");
      console.log(isApplyable);
      if (!isApplyable) {
        console.log("Already Applied");

        return res.status(500).json({
          success: false,
          msg: "You have already applied for this job",
        });
      } else {
        console.log("Not Applied Yet");
        appliedJob.applicants.push({
          applicant: user,
          status: "New",
          appliedDate: new Date(),
        });
        appliedUser.appliedJobs.push({
          job: appliedJob,
          status: "New",
          appliedDate: new Date(),
        });
        appliedJob.save();
        appliedUser.save();
        console.log("Successfully Applied");
        return res.status(200).json({
          success: true,
          msg: "You have applied for this job",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: error,
    });
  }
};

const verifyNewApplicant = (appliedJob, user) => {
  var isFine = true;
  try {
    appliedJob.applicants.every((applicant) => {
      const status = conditionChecker(applicant.applicant, user);
      if (!status) {
        isFine = false;
        throw "Break";
      } else {
        isFine = true;
      }
    });
  } catch (error) {
    if (error !== "Break") console.log(error);
  }
  return isFine;
};

const conditionChecker = (appliedJob, user) => {
  console.log(appliedJob);
  console.log(user);
  if (appliedJob.equals(user)) {
    return false;
  } else {
    return true;
  }
};

const getReusableJobDetail1 = async (job_id) => {
  const Jobs = await Job.findById(job_id).populate({
    path: "applicants",
    populate: {
      path: "applicant",
      model: "Users",
      select: "-appliedJobs -events -todos -favouriteJobs -savedJobs",
    },
  });
  console.log(Jobs);

  return Jobs;
};

module.exports.getCompanyJobDetail = async (req, res, next) => {
  var op = [];

  try {
    const result = await Company.findById(req.query.user).select("jobs");

    //get details of all the jobs
    const jobArray = result["jobs"];
    for (job_id in jobArray) {
      const objId = jobArray[job_id];
      var dat = await getReusableJobDetail1(objId);
      op.push({ data: dat });
    }
    return res.json({
      success: true,
      data: op,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: error,
      msg: error,
    });
  }
};

module.exports.getCompanyJobDetailApp = async (req, res, next) => {
  var op = [];

  try {
    const result = await Company.findById(req.user.company).select("jobs");

    //get details of all the jobs
    const jobArray = result["jobs"];
    for (job_id in jobArray) {
      const objId = jobArray[job_id];
      var dat = await getReusableJobDetail1(objId);
      op.push({ data: dat });
    }
    return res.status(200).json({
      success: true,
      data: op,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error,
      msg: error,
    });
  }
};

module.exports.updateJobStatus = async (req, res, next) => {
  try {
    const { job_id, user_id, status } = req.body;
    const job = await Job.findById(job_id);
    const user = await userModel.findById(user_id);

    if (job.applicants) {
      job.applicants.forEach((applicant) => {
        if (applicant.applicant == user_id) {
          applicant.status = status;
          user.appliedJobs.forEach((appliedJob) => {
            if (appliedJob.job == job_id) {
              appliedJob.status = status;
            }
          });
        }
      });
    }
    job.save();
    user.save();
    return res.json({
      success: true,
      msg: "Job Status Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: error,
    });
  }
};

module.exports.getAppliedJobs = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;
  var jobs = await userModel
    .findById(usr)
    .select("appliedJobs")
    .populate({
      path: "appliedJobs.job",
      populate: {
        path: "company",
      },
    });
  console.log(jobs.appliedJobs[0]);

  if (!jobs) {
    res.status(400).send("Applied Jobs not found");
  } else {
    res.status(200).send(jobs);
  }
});
module.exports.getSavedJobs = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;
  var jobs = await userModel
    .findById(usr)
    .select("savedJobs")
    .populate({
      path: "savedJobs.job",
      populate: {
        path: "company",
      },
    });
  console.log(jobs.savedJobs[0]);

  if (!jobs) {
    res.status(400).send("Saved Jobs not found");
  } else {
    res.status(200).send(jobs);
  }
});

module.exports.getAppliedJobsApp = asyncHandler(async (req, res, next) => {
  const usr = await req.user._id;
  var jobs = await userModel
    .findById(usr)
    .select("appliedJobs")
    .populate({
      path: "appliedJobs.job",
      populate: {
        path: "company",
      },
    });

  console.log(jobs.appliedJobs[0]);

  if (!jobs) {
    return res.status(400).json({ success: false });
  } else {
    return res.status(200).json({ data: jobs, success: true });
  }
});

module.exports.editJob = async (req, res, next) => {
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
      _id,
    } = req.body;

    const job = await Job.findById(_id);

    await job.updateOne({
      title: title,
      about: about,
      sallary: sallary,
      description: description,
      skills: skills,
      requirements: requirements,
      responsibilities: responsibilities,
      closeDate: closeTime,
    });
    job.save();

    const updatedJob = await Job.findById(_id);
    console.log("updatedJob");
    console.log(updatedJob);
    return res.status(200).json({
      success: true,
      data: updatedJob,
      msg: "The Job was updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      error: error,
      msg: "Something went wrong",
    });
  }
};
