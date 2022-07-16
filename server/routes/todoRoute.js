const {
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.route("/addTodo").post(protect, addTodo);
router.route("/getTodos").get(protect, getTodos);
router.route("/updateTodo").put(protect, updateTodo);
router.route("/deleteTodo").post(protect, deleteTodo);

module.exports = router;
