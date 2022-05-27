const {
  addJob,
  getCompanyJobs,
  getAllJobs,
  getJobsForSpecificSector,
} = require("../controllers/jobController");

const router = require("express").Router();

router.post("/addJob", addJob);
router.get("/getCompanyJobs", getCompanyJobs);
router.get("/getAllJobs", getAllJobs);
router.get("/getSectorJob", getJobsForSpecificSector);

module.exports = router;
