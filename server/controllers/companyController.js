const express = require("express");
const router = new express.Router();
const companyModel = require("../model/CompanyModel");

module.exports.getCompanyInfo = async (req, res, next) => {
  try {
    const company = await companyModel.findById(req.body.id);
    console.log(company);
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
    console.log(companies);
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
    console.log(companies);
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
    console.log(company);
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
