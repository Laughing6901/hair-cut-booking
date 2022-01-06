const express = require("express");
const router = express.Router();
const bookingController = require("../controller/bookingController");
const { validate } = require("../middlewares/validator");

router.get("/", bookingController.getAll);
router.get("/bookingdetails", bookingController.getAllBookingAndService);
router.get("/all-paging", bookingController.getAllpaging);
router.get("/get-by-id/:id", bookingController.getById);
router.post("/create", bookingController.create);
router.put("/update/:id", bookingController.update);
router.put("/update", bookingController.updateBookingStatus);
router.delete("/delete/:id", bookingController.delete);
router.get("/restore/:id", bookingController.restore);

module.exports = router;