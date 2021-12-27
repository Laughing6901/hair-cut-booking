const express = require("express");
const router = express.Router();
const commentController = require("../controller/commentController");
const { validate } = require("../middlewares/validator");

router.get("/", commentController.getAll);
router.get("/all-paging", commentController.getAllpaging);
router.get("/get-by-id/:id", commentController.getById);
router.post("/create", validate.validateComment(), commentController.create);
router.put("/update/:id", validate.validateComment(), commentController.update);
router.delete("/delete/:id", commentController.delete);
router.get("/restore/:id", commentController.restore);

module.exports = router;