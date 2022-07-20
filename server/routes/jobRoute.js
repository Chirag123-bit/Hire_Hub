const {
  addJob,
  getCompanyJobs,
  getAllJobs,
  getJobsForSpecificSector,
  getJob,
  applyForJob,
  getCompanyJobDetail,
  updateJobStatus,
  getAppliedJobs,
  getAppliedJobsApp,
  getSavedJobs,
  editJob,
  getCompanyJobDetailApp,
} = require("../controllers/jobController");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/addJob", addJob);
router.get("/getCompanyJobs", getCompanyJobs);
router.get("/getCompanyJobDetail", getCompanyJobDetail);
router.route("/getCompanyJobDetailApp").get(protect, getCompanyJobDetailApp);
// router.get("/getCompanyJobDetailApp", getCompanyJobDetailApp);
router.get("/getAllJobs", getAllJobs);
router.get("/getSectorJob", getJobsForSpecificSector);
router.get("/getJob", getJob);
router.post("/updateJobStatus", updateJobStatus);

router.route("/savedJobs").get(protect, getSavedJobs);
router.route("/appliedJobs").get(protect, getAppliedJobs);
router.route("/appliedJobsApp").get(protect, getAppliedJobsApp);
router.route("/applyForJob").post(protect, applyForJob);
router.route("/editJob").put(protect, editJob);

module.exports = router;
