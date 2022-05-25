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
