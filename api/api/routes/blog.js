const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");
const { validate } = require("../middlewares/validator");

router.get("/", blogController.getAll);
router.get("/all-paging", blogController.getAllPaging);
router.get("get-by-id/:id", blogController.getbyid);
router.post("/create", validate.validateBlogs(), blogController.create);
router.put("/update/:id", validate.validateBlogs(), blogController.update);
router.delete("/delete/:id", blogController.delete);
router.get("/restore/:id", blogController.restore);


module.exports = router;