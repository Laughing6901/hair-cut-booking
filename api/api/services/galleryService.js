const models = require("../../models");
const messageConstants = require("../constant/messageConstants");

//get-all
exports.getAll = () => {
    return models.gallery.findAndCountAll({
        attributes: ["gallery_id", "name", "image", "description"],
        where: {deleted: false},
        include: [
            {
                model: models.categories,
                attributes: ["cate_id", "name"],
            }
        ]
    });
};

//get-all-paging
exports.getAllpaging = (searchViewModel) => {
    limit = searchViewModel.limit;
    offset = searchViewModel.offset;
    return models.gallery.findAndCountAll({
        limit: limit,
        offset: offset,
        where: {deleted: false}
    });
};

//get-by-id
exports.getByid = async (id) => {
    return models.gallery.findOne({where: {gallery_id: id}});
};


//create
exports.create = async (gallery) => {
    return models.gallery.create(gallery);
};

//update
exports.update = async (id, galleryUpdate) => {
    const Id = await models.gallery.findOne({where: {gallery_id: id}});
    if(!Id){
        return Promise.resolve({
            messsage: messageConstants.GALLERY_ID_NOT_FOUND
        });
    }else{
        return models.gallery.update(galleryUpdate, {where: {gallery_id: id}});
    }
};

//soft delete
exports.delete = (id, options) => {
    return models.gallery.update(options, { where: {gallery_id: id} });
};

//restore
exports.restore = (id, options) => {
    return models.gallery.update(options, {where: {gallery_id:id}});
};


/// API get detail information about gallery relating with categories 
exports.getCate = () => {
    // models.categories.hasMany(models.gallery, {foreignKey: 'id'});
    // models.gallery.belongsTo(models.categories, {foreignKey: 'cate_id'});
    return models.gallery.findAll({
      where:{deleted: false},
    order: [
        ['created_date', 'DESC']
    ],
    attributes:['gallery_id','name'],
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