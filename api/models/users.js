'use strict';
const { Sequelize,DataTypes } = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
id: {
  allowNull: false,
  autoIncrement: true,
  primaryKey: true,
  type: Sequelize.INTEGER(4),
},
username: {
  type: Sequelize.STRING(255)
},
password: {
  type: Sequelize.STRING(255)
},
email: {
  type: Sequelize.STRING(255)
},
phone: {
  type: Sequelize.STRING(12)
},
avatar: {
  type: Sequelize.STRING(1024)
},
address:{
    type: Sequelize.STRING(255)
},
role: {
  type: Sequelize.INTEGER(2),
  defaultValue: false
},
status: {
  type: Sequelize.INTEGER(2),
  defaultValue: true
},
deleted: {
  type: Sequelize.INTEGER(2),
  defaultValue: false
},
create_date: {
  type: Sequelize.DATE,
  allowNull: false,
  defaultValue: DataTypes.NOW,
},
created_by: {
  type: Sequelize.STRING(255)
},
updated_date: {
  type: Sequelize.DATE,
  allowNull: false,
  defaultValue: DataTypes.NOW
},
updated_by: {
  type: Sequelize.STRING(255)
},
  },
{   
   timestamps: false
});
return users;
}
