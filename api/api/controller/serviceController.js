const serviceSer = require("../services/serviceService");
const { validationResult } = require("express-validator");
const messageConstants = require("../constant/messageConstants");
const Paginator = require("../commons/Paginator");
const upload = require("../middlewares/upload");
const fs = require("fs");

//get-all
exports.getAll = (req, res) => {
  serviceSer
    .getAll()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: messageConstants.SERVICE_FOUND,
        data: data,
      });
    })
    .catch((err) => {
      res.status(404).send({
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
  await serviceSer
    .getAllpaging(data)
    .then((data) => {
      const response = Paginator.getPagingData(data, page, limit);
      res.status(200).json({
        success: true,
        message: messageConstants.SERVICE_NOT_FOUND,
        data: response,
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
  serviceSer
    .getByid(req.params.id)
    .then((service) => {
      if (service === null) {
        res.status(200).json({
          message: messageConstants.SERVICE_FOUND,
        });
      } else {
        res.status(404).json({
          success: true,
          message: messageConstants.SERVICE_NOT_FOUND,
          service: service,
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

exports.getServiceById = (req, res) => {
  serviceSer
    .getServiceByid(req.params.id)
    .then((service) => {
      if (service === null) {
        res.status(200).json({
          message: messageConstants.SERVICE_FOUND,
        });
      } else {
        res.status(404).json({
          success: true,
          message: messageConstants.SERVICE_NOT_FOUND,
          service: service,
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
exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(402).json({ errors: errors.array() });
      return;
    }
    const id = req.body.service_id;
    console.log("id: ", id);
    const service = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      cate_id: req.body.cate_id,
    };
    // await upload(req,res);
    const file = req.file;
    if(file !== undefined) {
      console.log(file);
      file.uploadDir = "/upload/uploads/";
      let newPath = file.uploadDir + file.originalname;
      console.log("log new path", newPath);
      service.image = newPath;
    }
      console.log("service", service);
        serviceSer
        .create(service)
        .then((result) => {
          res.status(200).json({
            success: true,
            message: messageConstants.SERVICE_CREATE_SUSSCESS,
            service: result,
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
exports.update = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    // await upload(req, res);
    const id = req.params.id;
    console.log("id: ", id);
    const service = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      cate_id: req.body.cate_id,
    };
    // await upload(req,res);
    const file = req.file;
    if(file !== undefined) {
      console.log(file);
      file.uploadDir = "/upload/uploads/";
      let newPath = file.uploadDir + file.originalname;
      console.log("log new path", newPath);
      service.image = newPath;
    }
      serviceSer
        .update(id, service)
        .then((result) => {
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
    return next(err);
  }
};

//soft delete
exports.delete = (req, res) => {
  const id = req.params.id;
  const options = { field: "deleted", deleted: 1, updated_date: Date() };
  serviceSer
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.SERVICE_DELETED,
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
  serviceSer
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.SERVICE_RESTORE_SUSSCESS,
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

//get service
exports.getCate = (req, res) => {
  serviceSer
    .getCate()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: messageConstants.SERVICE_NOT_FOUND,
        categories: data,
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
