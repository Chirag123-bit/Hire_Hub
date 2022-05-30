const express = require("express");
const router = new express.Router();
const Job = require("../model/JobModel");
const Company = require("../model/CompanyModel");
const userModel = require("../model/userModel");
const util = require("util");

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
  } catch (error) {
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
    console.log(jobs);
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
    const { user, job } = req.body.params;
    const appliedJob = await Job.findById(job);
    const appliedUser = await userModel.findById(user);
    //find if the user has already applied for this job
    // console.log(appliedUser, job);
    if (appliedJob.applicants) {
      appliedJob.applicants.forEach((applicant) => {
        if (applicant.applicant == user) {
          return res.json({
            success: false,
            msg: "You have already applied for this job",
          });
        }
      });
    }
    appliedJob.applicants.push({
      applicant: user,
      status: "New",
      appliedDate: new Date(),
    });
    appliedUser.appliedJobs.push({
      job: job,
      status: "New",
      appliedDate: new Date(),
    });
    appliedJob.save();
    appliedUser.save();
    return res.json({
      success: true,
      msg: "You have applied for this job",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: error,
    });
  }
};

// module.exports.getCompanyJobDetail = async (req, res, next) => {
//   try {
//     const result = await Company.findById(req.query.user).select("jobs");
//     // .populate("applicants.$applicant")
//     const jobArray = result["jobs"];
//     var op = [];
//     for (job_id in jobArray) {
//       const objId = jobArray[job_id];
//       var dat = await getReusableJobDetail(objId);
//       var jobData = await Job.findById(objId);
//       op.push({ data: dat, job: jobData });
//     }
//     return res.json({
//       success: true,
//       data: op,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.json({
//       success: false,
//       error: error,
//       msg: error,
//     });
//   }
// };

const getReusableJobDetail = async (job_id) => {
  var res;
  // const Jobs = await Job.findById(job_id).populate({
  //   path: "applicants",
  //   populate: {
  //     path: "applicant",
  //     model: "Users",
  //   },
  // });
  // console.log(Jobs);
  await Job.aggregate([
    { $match: { _id: job_id } },
    {
      $lookup: {
        from: "users",
        localField: "applicants.applicant",
        foreignField: "_id",
        as: "user_detail",
      },
    },

    { $unwind: "$applicants" },
    {
      $group: {
        _id: {
          status: "$applicants.status",
        },

        data: { $push: "$user_detail" },
      },
    },
  ]).then((result) => {
    res = result;
    return result;
  });
  return res;
};

const getReusableJobDetail1 = async (job_id) => {
  // const Jobs = await Job.findById(job_id).populate({
  //   path: "applicants",
  //   populate: {
  //     path: "applicant",
  //     model: "Users",
  //   },
  // });
  // console.log(Jobs);
  const Jobs = await Job.findById(job_id).populate({
    path: "applicants",
    populate: {
      path: "applicant",
      model: "Users",
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
