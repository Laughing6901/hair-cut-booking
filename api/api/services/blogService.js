const models = require("../../models");
const messageConstants = require("../constant/messageConstants");

//get all
exports.getAll = () => {
  return models.blogs.findAndCountAll({ where: { deleted: false } });
};

//get all paging
exports.getallpaging = (searchViewModel) => {
  limit = searchViewModel.limit;
  offset = searchViewModel.offset;
  return models.blogs.findAndCountAll({
    limit: limit,
    offset: offset,
    where: { deleted: false },
  });
};

//get by id
exports.getbyid = async (id) => {
  return models.blogs.findOne({ where: { id: id } });
};

//create
exports.create = async (blogs) => {
  return models.blogs.create(blogs);
};

//update
exports.update = async (id, blogUpdate) => {
  const Id = await models.blogs.findOne({ where: { id: id } });
  if (!Id) {
    return Promise.resolve({
      message: messageConstants.BLOGS_ID_NOT_FOUND,
    });
  } else if (!Id) {
    return Promise.resolve({
      message: messageConstants.BLOGS_NOT_AVAILABLE,
    });
  } else {
    return models.blogs.update(blogUpdate, { where: { id: id } });
  }
};

//soft delete
exports.delete = (id, options) => {
  return models.blogs.update(options, { where: { id: id } });
};

//restore
exports.restore = (id, options) => {
  return models.blogs.update(options, { where: { id: id } });
};
