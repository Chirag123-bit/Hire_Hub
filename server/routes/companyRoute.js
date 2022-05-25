const { getCompanyInfo } = require("../controllers/companyController");

const router = require("express").Router();

router.post("/getCompanyData", getCompanyInfo);

module.exports = router;
