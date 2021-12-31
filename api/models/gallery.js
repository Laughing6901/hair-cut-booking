const { Sequelize, DataTypes } = require('sequelize');
module.exports = function(sequelize, DataTypes){
    var gallery = sequelize.define('gallerys', {
        gallery_id: {
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
        description: {
            type: Sequelize.STRING(255)
        },
        // cate_id: {
        //     type: Sequelize.INTEGER(4)
        // },
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
    return gallery;
}