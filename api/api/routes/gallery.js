const express = require("express");
const router = express.Router();
const gerController = require("../controller/galleryController");
const { validate } = require("../middlewares/validator");
const multer = require('multer');
// var upload = multer({dest: './upload/uploads/'});
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./upload/uploads/");
    },
    filename: function (req, files, callback) {
          callback(null,''+`${files.originalname}`)
      },
  });
const upload = multer({ storage: storage });


router.get("/", gerController.getAll);
router.get("/all-paging", gerController.getAllpaging);
router.get("/get-cate", gerController.getCate);
router.get("/get-by-id/:id", gerController.getById);
router.post("/create",upload.single('image'), gerController.create);
router.put("/update/:id", validate.validateGallery(), gerController.update);
router.delete("/delete/:id", gerController.delete);
router.get("/restore/:id", gerController.restore);

module.exports = router;