
const express = require("express");
const router = express.Router();
const cateController = require("../controller/categoryController");
const { validate } = require('../middlewares/validator');

router.get("/", cateController.getAll);
router.get("/all-paging", cateController.getAllPaging);
router.get("/get-by-id/:id", cateController.getById);
router.post("/create", validate.validateCreateCategories(), cateController.create);
router.put("/update/:id", validate.validateCreateCategories(), cateController.update);
router.delete("/delete/:id", cateController.delete);
router.get("/restore/:id", cateController.restore);

module.exports = router;