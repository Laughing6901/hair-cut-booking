const models = require("../../models");
const messageConstants = require("../constant/messageConstants");

//get all
exports.getAll = () => {
  // return models.categories.findAndCountAll({ where: { deleted: false } });
  return models.categories.findAll({
    attributes: ["cate_id","name", "image_cate"],
    where: {
      deleted: false,
      
    },
    include:[
      {
        model: models.service,
        attributes:['service_id','name','price', 'image', 'cate_id', 'status'],
      },
      {
        model: models.gallery,
        attributes:['gallery_id','name', 'image']
      }, 
      {
        model: models.voucher,
        attributes: ["voucher_id", "voucher_code", "status", "image_service", "price", "description_voucher"]
      }
  ],
  })
};

//get all paging
exports.getAllPaging = (searchViewModel) => {
  // limit = searchViewModel.limit;
  // offset = searchViewModel.offset;
  return models.categories.findAll({
    // limit: limit,
    // offset: offset,
    where: { 
      include: models.service,
      deleted: false },
  });
};

//get by id
exports.getByid = async (id) => {
  return models.categories.findOne({ where: { cate_id: id } });
};

//create
exports.create = async (categories) => {
  return models.categories.create(categories);
};

//update
exports.update = async (id, cateUpdate) => {
  const Id = await models.categories.findOne({ where: { cate_id: id } });
  if (!Id) {
    return Promise.resolve({
      message: messageConstants.CATEGORIES_ID_NOT_FOUND,
    });
  } else if (!Id) {
    return Promise.resolve({
      message: messageConstants.CATEGORIES_NOT_AVAILABLE,
    });
  } else {
    return models.categories.update(cateUpdate, { where: { cate_id: id } });
  }
};

//soft delete
exports.delete = (id, options) => {
  return models.categories.update(options, { where: { cate_id: id, deleted: 0 } });
};

//restore
exports.restore = (id, options) => {
  return models.categories.update(options, { where: { cate_id: id, deleted: 1 } });
};

