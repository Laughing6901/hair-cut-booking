const cateService = require("../services/categoryService");
const { validationResult } = require("express-validator");
const messageConstants = require("../constant/messageConstants");
const Paginator = require("../commons/Paginator");

//get all
exports.getAll = (req, res) => {
  cateService
    .getAll()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: messageConstants.CATEGORIES_NOT_FOUND,
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
exports.getAllPaging = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size);
  const { limit, offset } = Paginator.getPagination(page, size);
  const data = { limit, offset };
  await cateService
    .getAllPaging(data)
    .then((data) => {
      const reponse = Paginator.getPagingData(data, page, limit);
      res.status(200).json({
        success: true,
        message: messageConstants.CATEGORIES_NOT_FOUND,
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
  cateService
    .getByid(req.params.id)
    .then((cate) => {
      if (cate === null) {
        res.status(200).json({
          message: messageConstants.CATEGORIES_FOUND,
        });
      } else {
        res.status(200).json({
          success: true,
          message: messageConstants.CATEGORIES_NOT_FOUND,
          cate: cate,
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
    const categories = {
      name: req.body.name,
      id_service: req.body.id_service,
      id_gallery: req.body.id_gallery,
      image_cate: req.body.image_cate,
      created_by: req.body.created_by,
      status: 1,
      deleted: 0,
    };
    cateService
      .create(categories)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.CATEGORIES_CREATE_SUSSCESS,
          categories: result,
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
    const cateUpdate = {
      name: req.body.name,
      id_service: req.body.id_service,
      id_gallery: req.body.id_gallery,
      image_cate: req.body.image_cate,
      updated_by: req.body.updated_by,
      updated_date: Date(),
    };
    cateService
      .update(id, cateUpdate)
      .then((result) => {
        if (result == 1) {
          res.status(200).json({
            success: true,
            message: messageConstants.CATEGORIES_UPDATE_SUSSCESS,
          });
        } else {
          res.status(200).json({
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
  } catch (err) {
    return next(err);
  }
};

//soft delete
exports.delete = (req, res) => {
  const id = req.params.id;
  const options = { field: "deleted", deleted: 1, updated_date: Date() };
  cateService
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.CATEGORIES_DELETED,
        });
      } else {
        res.status(500).json({
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
  cateService
    .restore(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.CATEGORIES_RESTORE_SUSSCESS,
        });
      } else {
        res.status(500).json({
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