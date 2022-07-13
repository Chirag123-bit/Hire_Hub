const {
  addEvents,
  getEvents,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.route("/addEvent").post(protect, addEvents);
router.route("/getEvents").get(protect, getEvents);
router.route("/updateEvent").put(protect, updateEvent);
router.route("/deleteEvent/:id").delete(protect, deleteEvent);

module.exports = router;
