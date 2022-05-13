const {
  register,
  login,
  setAvatar,
  getAllUsers,
  verify,
  verified,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);
router.get("/verify/:userId/:uniqueString", verify);
router.get("/user/verified/", verified);

module.exports = router;
