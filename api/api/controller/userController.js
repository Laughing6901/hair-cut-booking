const userService = require('../services/userSevice');
const { validationResult } = require('express-validator');
const messageConstants = require('../constant/messageConstants');
const models = require('../../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Paginator = require('../commons/paginator');
const Op = models.Sequelize.Op;

// Get All
exports.get = async (req, res) => {
  await userService.get().then(result => {
    res.status(200).json({
      success: true,
      message: messageConstants.USER_FOUND,
      data: result
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message || 500
    });
  });
};

//get All stylist
exports.getStylist = async (req, res) => {
  await userService.getAllStylist().then(result => {
    res.status(200).json({
      success: true,
      message: messageConstants.USER_FOUND,
      data: result
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message || 500
    });
  });
};


// Get All paging
exports.getallpaging = async function (req, res) {
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size);
  var condition = JSON.stringify(req.query) || null;
  const { limit, offset } = Paginator.getPagination(page, size);
  const data = { limit, offset, condition };
  await userService.getallpaging(data).then(result => {
    const response = Paginator.getPagingData(result, page, limit);
    res.status(200).json({
      success: true,
      data: response,
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message || 500
    });
  });
};


// GetbyID
exports.getbyID = function (req, res) {
  userService.getbyID(req.params.id).then(user => {
    if (user === null) {
      res.status(409).json({
        message: messageConstants.USER_ID_NOT_FOUND,
      })
    } else {
      res.status(200).json({
        success: true,
        message: messageConstants.USER_FOUND,
        user: user
      });
    }
  }).catch(err => {
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      },
    })
  });
};

// Register
exports.register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    console.log(req.body);
    const user = {
      username: req.body.username,
      password: req.body.password,
      fullname: req.body.fullname,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      role: req.body.role,
    }
    const file = req.file;
    if(file !== undefined) {
      console.log(file);
      file.uploadDir = "/upload/uploads/";
      let newPath = file.uploadDir + file.originalname;
      console.log("log new path", newPath);
      user.avatar = newPath;
    } else {
      file.uploadDir = "/upload/uploads/";
      let newPath = file.uploadDir + "user.png";
      console.log("log new path", newPath);
      user.avatar = newPath;
    }
    console.log(user);
    userService.register(user).then(result => {
      if (result.message === undefined) {
        res.status(200).json({
          success: true,
          message: messageConstants.USER_CREATE_SUSSCESS,
          User: result
        });
      } else {
        res.status(400).json({
          message: result.message
        });
      }
    }).catch(err => {
      res.send({
        error: {
          status: err.status || 500,
          message: err.message
        },
      })
    });
  } catch (err) {
    return next(err);
  }
};

// Update
exports.update = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const id = req.params.id;
    console.log(req.body);
    const userUpdate = {
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      role: req.body.role,
      password: req.body.password,
      updated_date: Date(),
    }
    const file = req.file;
    if (file !== undefined) {
      console.log(file);
      file.uploadDir = "/upload/uploads/";
      let newPath = file.uploadDir + file.originalname;
      console.log("log new path", newPath);
      userUpdate.avatar = newPath;
    }
    console.log(userUpdate);
    userService.update(id, userUpdate).then((result) => {
      res.status(200).json({
        success: true,
        message: messageConstants.SERVICE_UPDATE_SUSSCESS,
      });
    })
    .catch((err) => {
      res.send({
        error: {
          status: err.status || 500,
          message: err.message,
        },
      });
    });
  } catch (err) {
    return next(err)
  }
};

//update stylist status
exports.updateStylistStatus = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const id = req.params.id;
    console.log(id);
    const userUpdate = {
      status: req.body.status,
      updated_date: new Date(Date.now()),
    }
    console.log(userUpdate);
    userService.updateStylist(id, userUpdate).then(async (result) => {
      if (result == true) {
        const data = await models.users.findOne({
          where: { user_id: req.params.id }
        });
        console.log(data);
        res.status(200).json({
          success: true,
          message: messageConstants.USER_UPDATE_SUSSCESS,
          userUpdate: data
        });
      } else {
        res.status(500).json({
          message: result.message,
        })
      }
    }).catch(err => {
      res.send({
        error: {
          status: err.status || 500,
          message: err.message
        },
      })
    });
  } catch (err) {
    return next(err)
  }
};

//Soft delete
exports.delete = function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const id = req.params.id;
    const options = { field: 'deleted', deleted: 1, updated_date: Date() }
    userService.delete(id, options).then(result => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.USER_DELETED,
        });
      } else {
        res.status(500).json({
          message: result.message,
        })
      }
    }).catch(err => {
      res.send({
        error: {
          status: err.status || 500,
          message: err.message
        },
      })
    });
  } catch (err) {
    return next(err)
  }
};


// Restore
exports.restore = function (req, res) {
  const id = req.params.id;
  const options = { field: 'deleted', deleted: 0, updated_date: Date() }
  userService.restore(id, options).then(result => {
    if (result == true) {
      res.status(200).json({
        success: true,
        message: messageConstants.USER_RESTORE_SUSSCESS,
      })
    } else {
      res.status(404).json({
        message: result.message,
      })
    }
  }).catch(err => {
    res.send({
      error: {
        status: err.status || 500,
        message: err.message
      },
    })
  });
};
// Login
exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const account = {
      username: req.body.username,
      password: req.body.password
    };
    let loginUserRes = await userService.login(account);
    if (loginUserRes.accessToken, loginUserRes.refreshToken) {
      const { fullname, id, ...token } = loginUserRes;
      res.status(200).json({
        success: true,
        message: messageConstants.USER_LOGIN_SUSSCESS,
        Account: loginUserRes.fullname,
        Id: loginUserRes.id,
        Token: token
      });
      // return res.cookie('t', data.accessToken, { expire: new Date() + 9999 });
    }
    else {
      res.status(loginUserRes.status).json({
        message: loginUserRes.message
      });
    }
  } catch (err) {
    return next(err);
  };
};

//signout
// exports.signOut = (req,res)=> {
//     res.clearCookie('t');
//     return res.status(400).json({
//         success: true,
//         message: messageConstants.USER_NOT_FOUND
//     })
// }

// Reset password
exports.resetpassword = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const id = req.params.id;
    const account = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };
    userService.resetpassword(id, account).then(data => {
      res.status(200).json({
        success: true,
        Account: account.username,
        Password: account.password
      });
    }).catch(err => {
      res.send({
        error: {
          status: err.status || 500,
          message: err.message
        },
      })
    })
  } catch (err) {
    return next(err);
  };
};