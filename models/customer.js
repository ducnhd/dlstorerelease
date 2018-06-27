'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    userLogin: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    imagepath: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    note: DataTypes.TEXT
  });
  Customer.associate = function (models) {
    Customer.hasMany(models.Transaction);
  };

  Customer.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  Customer.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return Customer;
};