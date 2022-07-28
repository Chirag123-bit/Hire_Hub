const {
  getCompanyInfo,
  getAllCompanies,
  getCompaniesForSpecificSector,
  getCompanyDetails,
  editCompany,
  changeLogo,
  getJobsWearOs,
} = require("../controllers/companyController");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/getCompanyData", getCompanyInfo);
router.get("/getCompanies", getAllCompanies);
router.get("/getSectorCompany", getCompaniesForSpecificSector);
router.get("/getCompanyDetails", getCompanyDetails);
router.route("/editCompany").put(protect, editCompany);
router.route("/changeLogo").post(protect, changeLogo);
router.route("/getJobsWearOs").get(protect, getJobsWearOs);
// editCompany;

module.exports = router;
