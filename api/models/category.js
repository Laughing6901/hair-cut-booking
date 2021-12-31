'use strict';
const { Sequelize,DataTypes } = require('sequelize');
module.exports = function (sequelize, DataTypes){
    var categories = sequelize.define('categories', {
        cate_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(4)
        },
        name: {
            type: Sequelize.STRING(255)
        },
        image_cate: {
            type: Sequelize.STRING(255)
        },
        status: {
            type: Sequelize.INTEGER(2),
            defaultValue: true
        },
        deleted: {
            type: Sequelize.INTEGER(2),
            defaultValue: false
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
    return categories;
}