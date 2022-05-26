const { addJob } = require("../controllers/jobController");

const router = require("express").Router();

router.post("/addJob", addJob);

module.exports = router;
