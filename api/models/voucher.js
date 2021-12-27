const { Sequelize, DataTypes } = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  var voucher = sequelize.define(
    "voucher",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(4),
      },
      voucher_code: {
        type: Sequelize.STRING(255),
      },
      description_voucher: {
        type: Sequelize.STRING(255),
      },
      cate_id: {
        type: Sequelize.INTEGER(4),
      },
      user_id: {
        type: Sequelize.INTEGER(4),
      },
      status: {
        allowNull: true,
        type: Sequelize.INTEGER(2),
      },
      deleted: {
        allowNull: false,
        type: Sequelize.INTEGER(2),
      },
      created_time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      deleted_time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      image_service: {
        type: Sequelize.STRING(1024),
      },
      price: {
        type: Sequelize.STRING(99),
      },
      created_by: {
        type: Sequelize.STRING(255),
      },
      created_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_by: {
        type: Sequelize.STRING(255),
      },
      updated_date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
  return voucher;
};
