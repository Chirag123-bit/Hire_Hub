const {
  register,
  login,
  setAvatar,
  getAllUsers,
  verify,
  verified,
  codeSent,
  sendVerificationEmail,
} = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);
router.post("/verify/:userId/:uniqueString", verify);
router.get("/user/verified/", verified);
router.get("/user/codesent/", codeSent);
router.post("/sendVerification/", sendVerificationEmail);

module.exports = router;
