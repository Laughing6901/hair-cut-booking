const { Sequelize, DataTypes } = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  var booking = sequelize.define(
    "bookings",
    {
      booking_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(4),
      },
      // user_id:{
      //   type: Sequelize.INTEGER(4)
      // },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      contact: {
        type: Sequelize.STRING(255),
      },
      phone: {
        type: Sequelize.STRING(10),
      },
      description: {
        type: Sequelize.STRING(255),
      },
      preview: {
        type: Sequelize.STRING(255),
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER(2),
      },
      deleted: {
        allowNull: false,
        type: Sequelize.INTEGER(2),
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
  return booking;
};
