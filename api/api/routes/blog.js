const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");
const { validate } = require("../middlewares/validator");
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./upload/uploads/");
    },
    filename: function (req, files, callback) {
          callback(null,''+`${files.originalname}`)
      },
  });
const upload = multer({ storage: storage });

router.get("/", blogController.getAll);
router.get("/all-paging", blogController.getAllPaging);
router.get("get-by-id/:id", blogController.getbyid);
router.post("/create",upload.single("image_blogs"), validate.validateBlogs(), blogController.create);
router.put("/update/:id",upload.single("image_blogs"), validate.validateBlogs(), blogController.update);
router.delete("/delete/:id", blogController.delete);
router.get("/restore/:id", blogController.restore);


module.exports = router;