const express = require("express");
const multer = require("multer");
const CompanyModel = require("../model/CompanyModel");
const router = new express.Router();
const companyModel = require("../model/CompanyModel");

module.exports.getCompanyInfo = async (req, res, next) => {
  try {
    const company = await companyModel.findById(req.body.id);
    return res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

module.exports.getAllCompanies = async (req, res, next) => {
  try {
    const companies = await companyModel.find();

    return res.json({
      success: true,
      data: companies,
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: error,
    });
  }
};

module.exports.getCompaniesForSpecificSector = async (req, res, next) => {
  try {
    const companies = await companyModel.find({ sector: req.query.sector });
    return res.json({
      success: true,
      data: companies,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: error,
    });
  }
};

module.exports.getCompanyDetails = async (req, res, next) => {
  try {
    const company = await companyModel.findById(req.query.id).populate("jobs");

    return res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

module.exports.editCompany = async (req, res, next) => {
  const user = req.user;
  const companyId = user.company;
  var company;
  if (!companyId) {
    return res.status(401).json({
      success: false,
      msg: "You are not authorized to edit this company",
    });
  }
  try {
    company = await companyModel.findOneAndUpdate(
      { _id: companyId },
      {
        $set: {
          name: req.body.name,
          sector: req.body.sector,
          country: req.body.country,
          region: req.body.region,
          about: req.body.about,
          desc: req.body.desc,
          phone: req.body.phone,
        },
      }
    );
    return res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const storage = multer.diskStorage({
  destination: "./uploads/images/logo",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${file.originalname}`);
  },
});

const uploadProfileImage = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
      return cb(new Error("Please upload an image file"));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

//upload profile image
module.exports.changeLogo = async (req, res, next) => {
  uploadProfileImage.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        error: err.message,
      });
    } else {
      console.log("Uploaded");
    }
    try {
      const user = await CompanyModel.findById(req.user.company);

      if (!user) {
        return res.status(404).json({
          message: "Not Authorized for this action",
        });
      }
      user.avatarImage = req.file.path;
      await user.save();
      const updatedUser = await CompanyModel.findById(req.user.company);
      res.status(200).json({
        message: "Logo uploaded successfully",
        company: updatedUser,
      });
    } catch (e) {
      console.log(e);
    }
  });
};

//get jobs for company
module.exports.getJobsWearOs = async (req, res, next) => {
  const company_id = req.user.company;
  try {
    const company = await companyModel
      .findById(company_id)
      .populate({
        path: "jobs",
        model: "Job",
        select: "title -_id applicants.applicant",
      })
      .select("jobs");

    return res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error,
    });
  }
};
