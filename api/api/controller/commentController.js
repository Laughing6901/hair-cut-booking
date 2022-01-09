const serviceComment = require("../services/commentService");
const { validationResult } = require("express-validator");
const messageConstants = require("../constant/messageConstants");
const Paginator = require("../commons/Paginator");

//get-all
exports.getAll = (req, res) => {
    serviceComment
    .getAll()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: messageConstants.COMMENT_NOT_FOUND,
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
  await serviceComment
    .getAllpaging(data)
    .then((data) => {
      const reponse = Paginator.getPagingData(data, page, limit);
      res.status(200).json({
        success: true,
        message: messageConstants.COMMENT_NOT_FOUND,
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
    serviceComment
    .getByid(req.params.id)
    .then((comment) => {
      if (comment === null) {
        res.status(200).json({
          message: messageConstants.COMMNET_DETAIL_FOUND,
        });
      } else {
        res.status(404).json({
          success: true,
          message: messageConstants.COMMENT_NOT_FOUND,
          comment: comment,
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
    const comment = {
      user_id: req.body.user_id,
      content: req.body.content,
      created_date: Date(Date.now()),
      updated_date: Date(Date.now()),
      blog_id: req.body.blog_id,
      status: 1,
      deleted: 0,
    };
    serviceComment
      .create(comment)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.COMMENT_CREATE_SUSSCESS,
          comment: result,
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
    const commentUpdate = {
      user_id: req.body.user_id,
      content: req.body.content,
      delete: req.body.delete,
      end_time: req.body.end_time,
      updated_by: req.body.updated_by,
      updated_date: Date(),
    };
    serviceComment
      .update(id, commentUpdate)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.COMMENT_UPDATE_SUSSCESS,
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
  serviceComment
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.COMMENT_DELETED,
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
  serviceComment
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.COMMNET_RESTORE_SUSSCESS,
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

exports.getUser = (req,res) => {
    serviceComment.getUser().then(data => {
    res.status(404).json({
      success: true,
      message: messageConstants.COMMENT_NOT_FOUND,
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

