const { Sequelize, DataTypes } = require("sequelize");
module.exports = function(sequelize, DataTypes){
    var service = sequelize.define('service', {
        service_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(4)
        },
        name: {
            type: Sequelize.STRING(255)
        },
        image: {
            type: Sequelize.STRING(1024)
        },
        price: {
            type: Sequelize.DECIMAL(8)
        },
        description: {
            type: Sequelize.STRING(255)
        },
        // cate_id: {
        //     type: Sequelize.INTEGER(4)
        // },
        status: {
            type: Sequelize.INTEGER(2),
            defaultValue: true
        },
        deleted: {
            type: Sequelize.INTEGER(2),
            defaultValue: false
        },
        created_date: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        created_by: {
            type: Sequelize.STRING(255)
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
    return service;
}