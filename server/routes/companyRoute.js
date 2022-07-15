const {
  getCompanyInfo,
  getAllCompanies,
  getCompaniesForSpecificSector,
  getCompanyDetails,
  editCompany,
  changeLogo,
} = require("../controllers/companyController");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/getCompanyData", getCompanyInfo);
router.get("/getCompanies", getAllCompanies);
router.get("/getSectorCompany", getCompaniesForSpecificSector);
router.get("/getCompanyDetails", getCompanyDetails);
router.route("/editCompany").put(protect, editCompany);
router.route("/changeLogo").post(protect, changeLogo);
// editCompany;

module.exports = router;
