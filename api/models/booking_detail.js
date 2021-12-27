const { Sequelize, DataTypes } = require('sequelize');
module.exports = function(sequelize, DataTypes){
    var booking_detail = sequelize.define('bookingdetail', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(4)
        },
        booking_id: {
            type: Sequelize.INTEGER(4)
        },
        service_id: {
            type: Sequelize.INTEGER(4)
        },
        price: {
            type: Sequelize.STRING(99)
        },
        description: {
            type: Sequelize.STRING(1024)
        },
        status: {
            allowNull: false,
            type: Sequelize.INTEGER(2)
        },
        deleted: {
            allowNull: false,
            type: Sequelize.INTEGER(2)
        },
        created_by: {
            type: Sequelize.STRING(255)
        },
        created_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated_by: {
            type: Sequelize.STRING(255)
        },
        updated_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        timestamps: false
    });
    return booking_detail;
}