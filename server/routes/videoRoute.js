const { setCall } = require("../controllers/videoController");

const router = require("express").Router();

// router.post("/register", register);
// router.post("/login", login);
// router.post("/setAvatar/:id", setAvatar);
// router.get("/allusers/:id", getAllUsers);
router.post("/call/:room", setCall);

module.exports = router;
