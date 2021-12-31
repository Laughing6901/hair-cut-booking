const models = require("../../models");
const messageConstants = require("../constant/messageConstants");

//get-all
exports.getAll = () => {
    return models.voucher.findAndCountAll({where: {deleted: false}});
};

//get-all-paging
exports.getAllpaging = (searchViewModel) => {
    limit = searchViewModel.limit;
    offset = searchViewModel.offset;
    return models.voucher.findAndCountAll({
        limit: limit,
        offset: offset,
        where: {deleted: false}
    });
};

//get-by-id
exports.getByid = async (id) => {
    return models.voucher.findOne({where: {voucher_id: id}});
};


//create
exports.create = async (voucher) => {
    return models.voucher.create(voucher);
};

//update
exports.update = async (id, voucherUpdate) => {
    const Id = await models.voucher.findOne({where: {voucher_id: id}});
    if(!Id){
        return Promise.resolve({
            messsage: messageConstants.VOUCHER_ID_NOT_FOUND
        });
    }else{
        return models.voucher.update(voucherUpdate, {where: {voucher_id: id}});
    }
};

//soft delete
exports.delete = (id, options) => {
    return models.voucher.update(options, { where: {voucher_id: id} });
};

//restore
exports.restore = (id, options) => {
    return models.voucher.update(options, {where: {voucher_id:id}});
};


/// API get detail information about gallery relating with categories 
exports.getCate = () => {
    // models.categories.hasMany(models.voucher, {foreignKey: 'id'});
    // models.voucher.belongsTo(models.categories, {foreignKey: 'cate_id'});
    return models.voucher.findAll({
      where:{deleted: false},
    order: [
        ['created_date', 'DESC']
    ],
    attributes:['voucher_id','name'],
    include:[{
        model: models.categories,
        attributes:['cate_id','voucher_code','description_voucher']
    }]
    //     include: [{
    //         models: models.service,
    //         attributes: ["id", "service_name", "image_service", "price", "description", "cate_id"]
    //     }]
    })
}

exports.getUser = () => {
    // models.users.hasMany(models.voucher, {foreignKey: 'id'});
    // models.voucher.belongsTo(models.users, {foreignKey: 'user_id'});
    return models.voucher.findAll({
      where:{deleted: false},
    order: [
        ['created_date', 'DESC']
    ],
    attributes:['voucher_id','name'],
    include:[{
        model: models.users,
        attributes:['user_id','voucher_code','description_voucher']
    }]
    //     include: [{
    //         models: models.service,
    //         attributes: ["id", "service_name", "image_service", "price", "description", "cate_id"]
    //     }]
    })
}