const express = require("express");
const router = express.Router();
const serController = require("../controller/serviceController");
const { validate } = require("../middlewares/validator");

router.get("/", serController.getAll);
router.get("/all-paging", serController.getAllpaging);
router.get("/get-cate", serController.getCate);
router.get("/get-by-id/:id", serController.getById);
router.post("/create", serController.create);
router.put("/update/:id", serController.update);
router.delete("/delete/:id", serController.delete);
router.get("/restore/:id", serController.restore);

module.exports = router;