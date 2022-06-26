const {
  addCategory,
  getCategoryCount,
  getCategories,
} = require("../controllers/categoryController");

const router = require("express").Router();

router.post("/addCategory", addCategory);
router.get("/getCategory", getCategoryCount);
router.get("/getAllCategories", getCategories);

module.exports = router;
