const express= require ('express');
const router = express.Router();
const usersController= require('../controller/userController');
const { validate } = require('../middlewares/validator');
const checkAuthMiddleware= require('../middlewares/jwt_token');


router.get('/',checkAuthMiddleware.checkAccessToken,usersController.get);
router.get('/all-paging',checkAuthMiddleware.checkAccessToken,usersController.getallpaging);
router.get('/:id',checkAuthMiddleware.checkAccessToken,usersController.getbyID);
router.put('/:id',checkAuthMiddleware.checkAccessToken,validate.validateRegisterUser(),usersController.update);
router.delete('/:id',checkAuthMiddleware.checkAccessToken,usersController.delete);
router.post('/register',validate.validateRegisterUser(),usersController.register);  
router.post('/login',validate.validateCheckLogin(),usersController.login);
// router.get('/signout',usersController.signOut);
router.get('/restore/:id',checkAuthMiddleware.checkAccessToken,usersController.restore);
router.put('/reset-password/:id',validate.validateRegisterUser(),usersController.resetpassword);

module.exports= router;