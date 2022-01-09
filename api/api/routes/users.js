const express= require ('express');
const router = express.Router();
const usersController= require('../controller/userController');
const { validate } = require('../middlewares/validator');
const checkAuthMiddleware= require('../middlewares/jwt_token');
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

router.get('/',usersController.get);
router.get('/stylist',usersController.getStylist);
router.get('/all-paging',checkAuthMiddleware.checkAccessToken,usersController.getallpaging);
router.get('/:id',usersController.getbyID);
router.put('/:id',upload.single("image"),usersController.update);
router.put('/stylist/:id',usersController.updateStylistStatus);
router.delete('/:id',usersController.delete);
router.post('/register',upload.single("image"),usersController.register);  
router.post('/login',validate.validateCheckLogin(),usersController.login);
// router.get('/signout',usersController.signOut);
router.get('/restore/:id',checkAuthMiddleware.checkAccessToken,usersController.restore);
router.put('/reset-password/:id',validate.validateRegisterUser(),usersController.resetpassword);

module.exports= router;