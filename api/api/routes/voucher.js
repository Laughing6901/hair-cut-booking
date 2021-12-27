const express = require("express");
const router = express.Router();
const voucherController = require("../controller/voucherController");
const { validate } = require("../middlewares/validator");

router.get("/", voucherController.getAll);
router.get("/all-paging", voucherController.getAllpaging);
router.get("/get-by-id/:id", voucherController.getById);
router.post("/create", validate.validateVoucher(), voucherController.create);
router.put("/update/:id", validate.validateVoucher(), voucherController.update);
router.delete("/delete/:id", voucherController.delete);
router.get("/restore/:id", voucherController.restore);

module.exports = router;