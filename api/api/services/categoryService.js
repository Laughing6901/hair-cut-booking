const models = require("../../models");
const messageConstants = require("../constant/messageConstants");

//get all
exports.getAll = () => {
  return models.categories.findAndCountAll({ where: { deleted: false } });
};

//get all paging
exports.getAllPaging = (searchViewModel) => {
  limit = searchViewModel.limit;
  offset = searchViewModel.offset;
  return models.categories.findAndCountAll({
    limit: limit,
    offset: offset,
    where: { deleted: false },
  });
};

//get by id
exports.getByid = async (id) => {
  return models.categories.findOne({ where: { id: id } });
};

//create
exports.create = async (categories) => {
  return models.categories.create(categories);
};

//update
exports.update = async (id, cateUpdate) => {
  const Id = await models.categories.findOne({ where: { id: id } });
  if (!Id) {
    return Promise.resolve({
      message: messageConstants.CATEGORIES_ID_NOT_FOUND,
    });
  } else if (!Id) {
    return Promise.resolve({
      message: messageConstants.CATEGORIES_NOT_AVAILABLE,
    });
  } else {
    return models.categories.update(cateUpdate, { where: { id: id } });
  }
};

//soft delete
exports.delete = (id, options) => {
  return models.categories.update(options, { where: { id: id, deleted: 0 } });
};

//restore
exports.restore = (id, options) => {
  return models.categories.update(options, { where: { id: id, deleted: 1 } });
};

