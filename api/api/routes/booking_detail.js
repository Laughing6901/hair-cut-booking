const express = require("express");
const router = express.Router();
const bookingdetailController = require("../controller/bookingdetailController");
const { validate } = require("../middlewares/validator");

router.get("/", bookingdetailController.getAll);
router.get("/all-paging", bookingdetailController.getAllpaging);
router.get("/get-by-id/:id", bookingdetailController.getById);
router.post("/create", validate.validateBookingdetail(), bookingdetailController.create);
router.put("/update/:id", validate.validateBookingdetail(), bookingdetailController.update);
router.delete("/delete/:id", bookingdetailController.delete);
router.get("/restore/:id", bookingdetailController.restore);

module.exports = router;