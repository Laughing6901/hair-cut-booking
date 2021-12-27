const serviceVoucher = require("../services/voucherService");
const { validationResult } = require("express-validator");
const messageConstants = require("../constant/messageConstants");
const Paginator = require("../commons/Paginator");

//get-all
exports.getAll = (req, res) => {
    serviceVoucher
    .getAll()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: messageConstants.VOUCHER_NOT_FOUND,
        data: data,
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
};

//get all paging
exports.getAllpaging = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size);
  const { limit, offset } = Paginator.getPagination(page, size);
  const data = { limit, offset };
  await serviceVoucher
    .getAllpaging(data)
    .then((data) => {
      const reponse = Paginator.getPagingData(data, page, limit);
      res.status(200).json({
        success: true,
        message: messageConstants.VOUCHER_NOT_FOUND,
        data: reponse,
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
};

//get by id
exports.getById = (req, res) => {
    serviceVoucher
    .getByid(req.params.id)
    .then((voucher) => {
      if (voucher === null) {
        res.status(200).json({
          message: messageConstants.VOUCHER_DETAIL_FOUND,
        });
      } else {
        res.status(404).json({
          success: true,
          message: messageConstants.VOUCHER_NOT_FOUND,
          voucher: voucher,
        });
      }
    })
    .catch((err) => {
      res.send({
        error: {
          status: err.status || 500,
          message: err.message,
        },
      });
    });
};

//create
exports.create = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(402).json({ errors: errors.array() });
      return;
    }
    const voucher = {
      voucher_code: req.body.voucher_code,
      description_voucher: req.body.description_voucher,
      cate_id: req.body.cate_id,
      user_id: req.body.user_id,
      status: req.body.status,
      image_service: req.body.image_service,
      price: req.body.price,
      delete: req.body.delete,
      end_time: req.body.end_time,
      created_by: req.body.created_by,
      status: 1,
      deleted: 0,
    };
    serviceVoucher
      .create(voucher)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.VOUCHER_CREATE_SUSSCESS,
          voucher: result,
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
    return next(err);
  }
};

//update
exports.update = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const id = req.params.id;
    const voucherUpdate = {
      voucher_code: req.body.voucher_code,
      description_voucher: req.body.description_voucher,
      cate_id: req.body.cate_id,
      user_id: req.body.user_id,
      status: req.body.status,
      image_service: req.body.image_service,
      price: req.body.price,
      delete: req.body.delete,
      end_time: req.body.end_time,
      updated_by: req.body.updated_by,
      updated_date: Date(),
    };
    serviceVoucher
      .update(id, voucherUpdate)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.VOUCHER_UPDATE_SUSSCESS,
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
    return next(err);
  }
};

//soft delete
exports.delete = (req, res) => {
  const id = req.params.id;
  const options = { field: "deleted", deleted: 1, updated_date: Date() };
  serviceVoucher
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.VOUCHER_DELETED,
        });
      } else {
        res.status(404).json({
          message: result.message,
        });
      }
    })
    .catch((err) => {
      res.send({
        error: {
          status: err.status || 500,
          message: err.message,
        },
      });
    });
};

//restore
exports.restore = (req, res) => {
  const id = req.params.id;
  const options = { field: "deleted", deleted: 0, updated_date: Date() };
  serviceVoucher
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.VOUCHER_RESTORE_SUSSCESS,
        });
      } else {
        res.status(404).json({
          message: result.message,
        });
      }
    })
    .catch((err) => {
      res.send({
        error: {
          status: err.status || 500,
          message: err.message,
        },
      });
    });
};


exports.getCate = (req,res) => {
    serviceVoucher.getCate().then(data => {
    res.status(404).json({
      success: true,
      message: messageConstants.VOUCHER_NOT_FOUND,
      categories: data
    });
  }).catch(err => {
    res.send({
      error: {
        status: err.status ||500,
        message: err.message
      }
    })
  });
};


exports.getUser = (req,res) => {
    serviceVoucher.getUser().then(data => {
    res.status(404).json({
      success: true,
      message: messageConstants.VOUCHER_NOT_FOUND,
      user: data
    });
  }).catch(err => {
    res.send({
      error: {
        status: err.status ||500,
        message: err.message
      }
    })
  });
};

