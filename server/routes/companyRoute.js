const {
  getCompanyInfo,
  getAllCompanies,
  getCompaniesForSpecificSector,
} = require("../controllers/companyController");

const router = require("express").Router();

router.post("/getCompanyData", getCompanyInfo);
router.get("/getCompanies", getAllCompanies);
router.get("/getSectorCompany", getCompaniesForSpecificSector);

module.exports = router;
