const models = require("../../models");
const messageConstants = require("../constant/messageConstants");

//get-all
exports.getAll = () => {
    return models.comment.findAndCountAll({where: {deleted: false}});
};

//get-all-paging
exports.getAllpaging = (searchViewModel) => {
    limit = searchViewModel.limit;
    offset = searchViewModel.offset;
    return models.comment.findAndCountAll({
        limit: limit,
        offset: offset,
        where: {deleted: false}
    });
};

//get-by-id
exports.getByid = async (id) => {
    return models.comment.findOne({where: {id: id}});
};


//create
exports.create = async (comment) => {
    return models.comment.create(comment);
};

//update
exports.update = async (id, commentUpdate) => {
    const Id = await models.comment.findOne({where: {id: id}});
    if(!Id){
        return Promise.resolve({
            messsage: messageConstants.COMMENT_ID_NOT_FOUND
        });
    }else{
        return models.comment.update(commentUpdate, {where: {id: id}});
    }
};

//soft delete
exports.delete = (id, options) => {
    return models.comment.update(options, { where: {id: id} });
};

//restore
exports.restore = (id, options) => {
    return models.comment.update(options, {where: {id:id}});
};


/// API get detail information about gallery relating with categories 
exports.getUser = () => {
    models.users.hasMany(models.comment, {foreignKey: 'id'});
    models.comment.belongsTo(models.users, {foreignKey: 'user_id'});
    return models.comment.findAll({
      where:{deleted: false},
    order: [
        ['created_date', 'DESC']
    ],
    attributes:['id','name'],
    include:[{
        model: models.users,
        attributes:['id','content']
    }]
    //     include: [{
    //         models: models.service,
    //         attributes: ["id", "service_name", "image_service", "price", "description", "cate_id"]
    //     }]
    })
}