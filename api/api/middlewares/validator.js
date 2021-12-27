const { oneOf, check } = require("express-validator");

// categories
let validateCreateCategories = () => {
    return [ 
        check('name', 'CateName does not Empty').not().isEmpty(),
        check('name', 'CateName more than 4 degits').escape().trim().isLength({ min: 4 }),
    ]; 
}

//blogs
let validateBlogs = () => {
    return [ 
        check('name', 'BlogsName does not Empty').not().isEmpty(),
        check('name', 'BlogsName more than 4 degits').escape().trim().isLength({ min: 4 }),
    ]; 
}

//service
// let validateService = () => {
//     return [ 
//         check('service_name', 'ServiceName does not Empty').not().isEmpty(),
//         check('price', 'Price does not Empty').not().isEmpty(),
//         check('price', 'Price is a number').isNumeric(),
//     ]; 
// }

// Users
let validateRegisterUser = () => {
    return [ 
      check('username', 'UserName does not Empty').not().isEmpty(),
      check('username', 'UserName more than 6 degits').escape().trim().isLength({ min: 6 }),
      check('email', 'Email does not Empty').not().isEmpty(),
      check('email', ' Email should be form of Email').escape().trim().isEmail(),
      check('password', 'Password more than 6 degits').notEmpty().trim().isLength({ min:6 }),
      check('password', 'Password should have number and words').isAlphanumeric(),
  
    ]; 
  }
  
  let validateCheckLogin=()=>{
    return[
      oneOf([
        [
        check('username').exists(),
        check('username', 'Invalid does not Empty').not().isEmpty(),
        check('username', 'UserName more than 6 degits').escape().trim().isLength({ min: 6 }),
        check('password').exists(),
        check('password', 'Password more than 6 degits').trim().isLength({ min: 6}),
        check('password', 'Password should have number and words').isAlphanumeric(),
      ],
        check('access_token').exists()
      ]),
  ];
  }

  let validateGallery = () => {
    return [ 
        check('name', 'GalleryName does not Empty').not().isEmpty(),
        check('cate_id', 'cate_id does not Empty').not().isEmpty(),
    ]; 
}

let validateBookingdetail = () => {
  return [ 
      check('price', 'price does not Empty').not().isEmpty(),
      check('booking_id', 'booking_id does not Empty').not().isEmpty(),
  ]; 
}

let validateComment = () => {
  return [ 
      check('content', 'content does not Empty').not().isEmpty(),
      check('user_id', 'user_id does not Empty').not().isEmpty(),
  ]; 
}

let validateVoucher = () => {
  return [ 
      check('voucher_code', 'voucher_code does not Empty').not().isEmpty(),
      check('cate_id', 'cate_id does not Empty').not().isEmpty(),
  ]; 
}

let validateBooking = () => {
  return [ 
      check('contact', 'BookingName does not Empty').not().isEmpty(),
      check('phone', 'Phone does not Empty').not().isEmpty(),
  ]; 
}

let validate = {
    validateCreateCategories: validateCreateCategories,
    validateBlogs: validateBlogs,
    // validateService : validateService,
    validateRegisterUser: validateRegisterUser,
    validateCheckLogin: validateCheckLogin,
    validateGallery: validateGallery,
    validateBookingdetail: validateBookingdetail,
    validateComment: validateComment,
    validateVoucher: validateVoucher,
    validateBooking: validateBooking
};

module.exports = {validate};