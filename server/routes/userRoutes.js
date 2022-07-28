const {
  register,
  login,
  setAvatar,
  getAllUsers,
  verify,
  verified,
  codeSent,
  sendVerificationEmail,
  resendVerification,
  applyJob,
  allUsers,
  addEvent,
  markEventCompleted,
  markTodoCompleted,
  addTodos,
  updateUser,
  updateUserDetails,
  changeProfileImage,
  updatePassword,
  updateCompanyDetails,
  allUsersApp,
  getAppliedJobsWear,
} = require("../controllers/usersController");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);
router.post("/verify/:userId/:uniqueString", verify);
router.get("/user/verified/", verified);
router.get("/user/codesent/", codeSent);
router.post("/sendVerification/", sendVerificationEmail);
router.post("/reSendVerification/", resendVerification);
router.get("/applyJob/", applyJob);

router.route("/getAllUsers").get(protect, allUsers);
router.route("/getAllUsersApp").get(protect, allUsersApp);
router.route("/addEvent").post(protect, addEvent);
router.route("/addTodo").post(protect, addTodos);
router.route("/completeEvent").put(protect, markEventCompleted);
router.route("/completeTodo").put(protect, markTodoCompleted);
router.route("/updateUser").put(protect, updateUser);
router.route("/updateCompany").put(protect, updateCompanyDetails);
router.route("/updateUserDetails").post(protect, updateUserDetails);
router.route("/changeProfilePic").post(protect, changeProfileImage);
router.route("/updatePassword").put(protect, updatePassword);
router.route("/appliedJobsWear").get(protect, getAppliedJobsWear);

module.exports = router;
