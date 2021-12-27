const serviceBookingdetail = require("../services/booking_detailService");
const { validationResult } = require("express-validator");
const messageConstants = require("../constant/messageConstants");
const Paginator = require("../commons/Paginator");

//get-all
exports.getAll = (req, res) => {
    serviceBookingdetail
    .getAll()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: messageConstants.BOOKING_DETAIL_NOT_FOUND,
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
  await serviceBookingdetail
    .getAllpaging(data)
    .then((data) => {
      const reponse = Paginator.getPagingData(data, page, limit);
      res.status(200).json({
        success: true,
        message: messageConstants.BOOKING_DETAIL_NOT_FOUND,
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
    serviceBookingdetail
    .getByid(req.params.id)
    .then((booking_detail) => {
      if (booking_detail === null) {
        res.status(200).json({
          message: messageConstants.BOOKING_DETAIL_FOUND,
        });
      } else {
        res.status(404).json({
          success: true,
          message: messageConstants.BOOKING_DETAIL_NOT_FOUND,
          booking_detail: booking_detail,
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
    const booking_detail = {
      booking_id: req.body.booking_id,
      service_id: req.body.service_id,
      price: req.body.price,
      description: req.body.description,
      status: req.body.status,
      delete: req.body.delete,
      end_time: req.body.end_time,
      created_by: req.body.created_by,
      status: 1,
      deleted: 0,
    };
    serviceBookingdetail
      .create(booking_detail)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.BOOKING_DETAIL_CREATE_SUSSCESS,
          booking_detail: result,
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
    const booking_detailUpdate = {
      booking_id: req.body.booking_id,
      service_id: req.body.service_id,
      price: req.body.price,
      description: req.body.description,
      status: req.body.status,
      delete: req.body.delete,
      end_time: req.body.end_time,
      updated_by: req.body.updated_by,
      updated_date: Date(),
    };
    serviceBookingdetail
      .update(id, booking_detailUpdate)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.BOOKING_DETAIL_UPDATE_SUSSCESS,
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
  serviceBookingdetail
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.BOOKING_DETAIL_DELETED,
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
  serviceBookingdetail
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.BOOKING_DETAIL_RESTORE_SUSSCESS,
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


exports.getBooking = (req,res) => {
    serviceBookingdetail.getBooking().then(data => {
    res.status(404).json({
      success: true,
      message: messageConstants.BOOKING_DETAIL_NOT_FOUND,
      booking: data
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

exports.getService = (req,res) => {
    serviceBookingdetail.getService().then(data => {
    res.status(404).json({
      success: true,
      message: messageConstants.BOOKING_DETAIL_NOT_FOUND,
      service: data
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
