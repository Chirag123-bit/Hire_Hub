const { addJob, getCompanyJobs } = require("../controllers/jobController");

const router = require("express").Router();

router.post("/addJob", addJob);
router.get("/getCompanyJobs", getCompanyJobs);

module.exports = router;
