const models = require("../../models");
const messageConstants = require("../constant/messageConstants");

//get-all
exports.getAll = () => {
    return models.service.findAll({
        attributes:["service_id", "name", "image", "price", "description"],
        where: {deleted: false},
        include:[{
            model: models.categories,
            attributes:['cate_id','name']
        }],
    });
};

//get-all-paging
exports.getAllpaging = (searchViewModel) => {
    limit = searchViewModel.limit;
    offset = searchViewModel.offset;
    return models.service.findAndCountAll({
        // limit: limit,
        // offset: offset,
        where: {deleted: false}
    });
};

//get-by-id
exports.getByid = async (id) => {
    return models.service.findOne({where: {service_id: id}});
};


//create
exports.create = async (service) => {
    return models.service.create(service);
};

//update
exports.update = async (id, serviceUpdate) => {
    const Id = await models.service.findOne({where: {service_id: id}});
    if(!Id){
        return Promise.resolve({
            messsage: messageConstants.SERVICE_ID_NOT_FOUND
        });
    }else{
        return models.service.update(serviceUpdate, {where: {service_id: id}});
    }
};

//soft delete
exports.delete = (id, options) => {
    return models.service.update(options, { where: {service_id: id} });
};

//restore
exports.restore = (id, options) => {
    return models.service.update(options, {where: {service_id:id}});
};


/// API get detail information about service relating with categories 
exports.getCate = () => {
    // models.categories.hasMany(models.service, {foreignKey: 'id'});
    // models.service.belongsTo(models.categories, {foreignKey: 'cate_id'});
    return models.service.findAll({
      where:{deleted: false},
    order: [
        ['created_date', 'DESC']
    ],
    attributes:['service_id','name'],
    include:[{
        model: models.categories,
        attributes:['cate_id','name']
    }]
    //     include: [{
    //         models: models.service,
    //         attributes: ["id", "service_name", "image_service", "price", "description", "cate_id"]
    //     }]
    })
}