const serviceBooking = require("../services/bookingService");
const { validationResult } = require("express-validator");
const messageConstants = require("../constant/messageConstants");
const Paginator = require("../commons/Paginator");

//get-all
exports.getAll = (req, res) => {
    serviceBooking
    .getAll()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: messageConstants.BOOKING_NOT_FOUND,
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

//get all booking and service
exports.getAllBookingAndService = (req, res) => {
  serviceBooking
  .getAllBookingAndService()
  .then((data) => {
    res.status(200).json({
      success: true,
      message: messageConstants.BOOKING_NOT_FOUND,
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
  await serviceBooking
    .getAllpaging(data)
    .then((data) => {
      const reponse = Paginator.getPagingData(data, page, limit);
      res.status(200).json({
        success: true,
        message: messageConstants.BOOKING_NOT_FOUND,
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
    serviceBooking
    .getByid(req.params.id)
    .then((booking) => {
      if (booking === null) {
        res.status(200).json({
          message: messageConstants.BOOKING_FOUND,
        });
      } else {
        res.status(404).json({
          success: true,
          message: messageConstants.BOOKING_NOT_FOUND,
          booking: booking,
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
    const booking = {
      user_id: req.body.user_id,
      start_time: req.body.start_time,
      contact: req.body.contact,
      phone: req.body.phone,
      description: req.body.description,
      end_time: req.body.end_time,
      created_by: req.body.created_by,
      status: 2,
      deleted: 0,
    };
    console.log(booking);
    serviceBooking
      .create(booking)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.BOOKING_CREATE_SUSSCESS,
          booking: result,
        });
      })
      .catch((err) => {
        res.status(err.status || 500).send({
            message: err.message,
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
    const bookingUpdate = {
      start_time: req.body.start_time,
      contact: req.body.contact,
      phone: req.body.phone,
      description: req.body.description,
      status: req.body.status,
      delete: req.body.delete,
      end_time: req.body.end_time,
      updated_by: req.body.updated_by,
      updated_date: Date(),
    };
    serviceBooking
      .update(id, bookingUpdate)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.BOOKING_UPDATE_SUSSCESS,
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
  serviceBooking
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.BOOKING_DELETED,
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
  serviceBooking
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.BOOKING_RESTORE_SUSSCESS,
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



