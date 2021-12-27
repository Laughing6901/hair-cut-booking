const express = require("express");
const router = express.Router();
const gerController = require("../controller/galleryController");
const { validate } = require("../middlewares/validator");

router.get("/", gerController.getAll);
router.get("/all-paging", gerController.getAllpaging);
router.get("/get-cate", gerController.getCate);
router.get("/get-by-id/:id", gerController.getById);
router.post("/create", validate.validateGallery(), gerController.create);
router.put("/update/:id", validate.validateGallery(), gerController.update);
router.delete("/delete/:id", gerController.delete);
router.get("/restore/:id", gerController.restore);

module.exports = router;