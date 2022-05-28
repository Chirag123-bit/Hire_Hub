const {
  getCompanyInfo,
  getAllCompanies,
  getCompaniesForSpecificSector,
  getCompanyDetails,
} = require("../controllers/companyController");

const router = require("express").Router();

router.post("/getCompanyData", getCompanyInfo);
router.get("/getCompanies", getAllCompanies);
router.get("/getSectorCompany", getCompaniesForSpecificSector);
router.get("/getCompanyDetails", getCompanyDetails);

module.exports = router;
