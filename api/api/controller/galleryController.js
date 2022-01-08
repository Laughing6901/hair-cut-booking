const gallerySer = require("../services/galleryService");
const { validationResult } = require("express-validator");
const messageConstants = require("../constant/messageConstants");
const Paginator = require("../commons/Paginator");
const upload = require("../middlewares/upload");

//get-all
exports.getAll = (req, res) => {
    gallerySer
    .getAll()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: messageConstants.GALLERY_NOT_FOUND,
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
  await gallerySer
    .getAllpaging(data)
    .then((data) => {
      const reponse = Paginator.getPagingData(data, page, limit);
      res.status(200).json({
        success: true,
        message: messageConstants.GALLERY_NOT_FOUND,
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
    gallerySer
    .getByid(req.params.id)
    .then((gallery) => {
      if (gallery === null) {
        res.status(200).json({
          message: messageConstants.GALLERY_FOUND,
        });
      } else {
        res.status(404).json({
          success: true,
          message: messageConstants.GALLERY_NOT_FOUND,
          gallery: gallery,
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
  // try {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     res.status(402).json({ errors: errors.array() });
  //     return;
  //   }
  //   const gallery = {
  //     name: req.body.name,
  //     image: req.body.image,
  //     description: req.body.description,
  //     cate_id: req.body.cate_id,
  //     created_by: req.body.created_by,
  //     status: 1,
  //     deleted: 0,
  //   };
  //   gallerySer
  //     .create(gallery)
  //     .then((result) => {
  //       res.status(200).json({
  //         success: true,
  //         message: messageConstants.GALLERY_CREATE_SUSSCESS,
  //         gallery: result,
  //       });
  //     })
  //     .catch((err) => {
  //       res.send({
  //         error: {
  //           status: err.status || 500,
  //           message: err.message,
  //         },
  //       });
  //     });
  // } catch (err) {
  //   return next(err);
  // }
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(402).json({ errors: errors.array() });
      return;
    }
    const id = req.body.gallery_id;
    console.log("id: ", id);
    const gallery = {
      name: req.body.name,
      image: '',
      description: req.body.description,
      cate_id: req.body.cate_id,
      status: 1,
      deleted: 0,
    };
    await upload(req, res);
    const file = req.file;
    console.log(file);
      file.uploadDir = "/upload/uploads/";
      let newPath = file.uploadDir + file.originalname;
      console.log("log new path", newPath);
      gallery.image = newPath;
      console.log("gallery", gallery);
      if(Number(id) !== 0 ) {
        gallerySer
        .update(id, gallery)
        .then((result) => {
          console.log(result);
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
      } else {
        gallerySer
        .create(gallery)
        .then((result) => {
          console.log(result);
          res.status(200).json({
            success: true,
            message: messageConstants.SERVICE_CREATE_SUSSCESS,
            gallery: result,
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
      }
      
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
    const galleryUpdate = {
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      cate_id: req.body.cate_id,
      updated_by: req.body.updated_by,
      updated_date: Date(),
    };
    gallerySer
      .update(id, galleryUpdate)
      .then((result) => {
        res.status(200).json({
          success: true,
          message: messageConstants.GALLERY_UPDATE_SUSSCESS,
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
  gallerySer
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.GALLERY_DELETED,
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
  gallerySer
    .delete(id, options)
    .then((result) => {
      if (result == true) {
        res.status(200).json({
          success: true,
          message: messageConstants.GALLERY_RESTORE_SUSSCESS,
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
exports.getCate = (req,res) => {
    gallerySer.getCate().then(data => {
    res.status(404).json({
      success: true,
      message: messageConstants.GALLERY_NOT_FOUND,
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

