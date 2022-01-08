const express = require("express");
const router = express.Router();
const serController = require("../controller/serviceController");
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

router.get("/", serController.getAll);
router.get("/all-paging", serController.getAllpaging);
router.get("/get-cate", serController.getCate);
router.get("/get-by-id/:id", serController.getById);
router.get("/:id", serController.getServiceById);
router.post("/create",upload.single('image'), serController.create);
router.put("/update/:id",upload.single('image'), serController.update);
router.delete("/delete/:id", serController.delete);
router.get("/restore/:id", serController.restore);

module.exports = router;