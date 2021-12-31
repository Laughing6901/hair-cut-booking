const models = require("../../models");
const messageConstants = require("../constant/messageConstants");

//get-all
exports.getAll = () => {
    return models.booking.findAndCountAll({where: {deleted: false}});
};

//get-all-paging
exports.getAllpaging = (searchViewModel) => {
    limit = searchViewModel.limit;
    offset = searchViewModel.offset;
    return models.booking.findAndCountAll({
        limit: limit,
        offset: offset,
        where: {deleted: false}
    });
};

//get-by-id
exports.getByid = async (id) => {
    return models.booking.findOne({where: {booking_id: id}});
};


//create
exports.create = async (booking) => {
    return models.booking.create(booking);
};

//update
exports.update = async (id, bookingUpdate) => {
    const Id = await models.booking.findOne({where: {booking_id: id}});
    if(!Id){
        return Promise.resolve({
            messsage: messageConstants.BOOKING_ID_NOT_FOUND
        });
    }else{
        return models.booking.update(bookingUpdate, {where: {booking_id: id}});
    }
};

//soft delete
exports.delete = (id, options) => {
    return models.booking.update(options, { where: {booking_id: id} });
};

//restore
exports.restore = (id, options) => {
    return models.booking.update(options, {where: {booking_id:id}});
};


