const models = require("../../models");
const messageConstants = require("../constant/messageConstants");

//get-all
exports.getAll = () => {
    return models.booking_detail.findAndCountAll({where: {deleted: false}});
};

//get-all-paging
exports.getAllpaging = (searchViewModel) => {
    limit = searchViewModel.limit;
    offset = searchViewModel.offset;
    return models.booking_detail.findAndCountAll({
        limit: limit,
        offset: offset,
        where: {deleted: false}
    });
};

//get-by-id
exports.getByid = async (id) => {
    return models.booking_detail.findOne({where: {id: id}});
};


//create
exports.create = async (booking_detail) => {
    return models.booking_detail.create(booking_detail);
};

//update
exports.update = async (id, booking_detailUpdate) => {
    const Id = await models.booking_detail.findOne({where: {id: id}});
    if(!Id){
        return Promise.resolve({
            messsage: messageConstants.BOOKING_DETAIL_ID_NOT_FOUND
        });
    }else{
        return models.booking_detail.update(booking_detailUpdate, {where: {id: id}});
    }
};

//soft delete
exports.delete = (id, options) => {
    return models.booking_detail.update(options, { where: {id: id} });
};

//restore
exports.restore = (id, options) => {
    return models.gallebooking_detailry.update(options, {where: {id:id}});
};


/// API get detail information about gallery relating with categories 
exports.getBooking = () => {
    models.booking.hasMany(models.booking_detail, {foreignKey: 'id'});
    models.booking_detail.belongsTo(models.booking, {foreignKey: 'booking_id'});
    return models.booking_detail.findAll({
      where:{deleted: false},
    order: [
        ['created_date', 'DESC']
    ],
    attributes:['id','name'],
    include:[{
        model: models.booking,
        attributes:['id','price','description','status']
    }]
    //     include: [{
    //         models: models.service,
    //         attributes: ["id", "service_name", "image_service", "price", "description", "cate_id"]
    //     }]
    })
}


exports.getService = () => {
    models.service.hasMany(models.booking_detail, {foreignKey: 'id'});
    models.booking_detail.belongsTo(models.service, {foreignKey: 'service_id'});
    return models.booking_detail.findAll({
      where:{deleted: false},
    order: [
        ['created_date', 'DESC']
    ],
    attributes:['id','name'],
    include:[{
        model: models.service,
        attributes:['id','price','description','status']
    }]
    //     include: [{
    //         models: models.service,
    //         attributes: ["id", "service_name", "image_service", "price", "description", "cate_id"]
    //     }]
    })
}