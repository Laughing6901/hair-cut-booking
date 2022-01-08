const blogService = require("../services/blogService");
const { validationResult } = require("express-validator");
const messageConstants = require("../constant/messageConstants");
const Paginator = require("../commons/Paginator");

//get-all
exports.getAll = (req, res) => {
  blogService
    .getAll()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: messageConstants.BLOGS_NOT_FOUND,
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

//get-all-paging
exports.getAllPaging = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const size = parseInt(req.query.size);
  const { limit, offset } = Paginator.getPagination(page, size);
  const data = { limit, offset };
  await blogService
    .getallpaging(data)
    .then((data) => {
      const reponse = Paginator.getPagingData(data, page, limit);
      res.status(200).json({
        success: true,
        message: messageConstants.BLOGS_NOT_FOUND,
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
exports.getbyid = (req, res) => {
  blogService
    .getbyid(req.params.id)
    .then((blogs) => {
      if (blogs === null) {
        res.status(200).json({
          message: messageConstants.BLOGS_FOUND,
        });
      } else {
        res.status(404).json({
          success: true,
          message: messageConstants.BLOGS_NOT_FOUND,
          blogs: blogs,
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
    console.log(req.body);
    const blogs = {
      name: req.body.name,
      description: req.body.description,
      image_blog: req.body.image_blog,
      content: req.body.content,
      created_by: req.body.created_by,
      created_date: Date(Date.now()),
      updated_date: Date(Date.now()),
      status: 1,
      deleted: 0,
    };
    const file = req.file;
    if(file !== undefined) {
      console.log(file);
      file.uploadDir = "/upload/uploads/";
      let newPath = file.uploadDir + file.originalname;
      console.log("log new path", newPath);
      blogs.image = newPath;
    }
    blogService
      .create(blogs)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.BLOGS_CREATE_SUSSCESS,
          blogs: result,
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
    const blogUpdate = {
      name: req.body.name,
      description: req.body.description,
      content: req.body.content,
      updated_by: req.body.updated_by,
      updated_date: Date(),
    };
    const file = req.file;
    if(file !== undefined) {
      console.log(file);
      file.uploadDir = "/upload/uploads/";
      let newPath = file.uploadDir + file.originalname;
      console.log("log new path", newPath);
      blogUpdate.image = newPath;
    }
    blogService
      .update(id, blogUpdate)
      .then((result) => {
        if (result == 1) {
          res.status(200).json({
            success: true,
            message: messageConstants.BLOGS_UPDATE_SUSSCESS,
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
  blogService
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.BLOGS_DELETED,
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
  blogService
    .restore(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.BLOGS_RESTORE_SUSSCESS,
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
