'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    status: DataTypes.INTEGER,
    totalPricing: DataTypes.INTEGER,
    address: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
  }, {});
  
  Transaction.associate = function(models) {
    Transaction.hasMany(models.Productdetail);
    Transaction.belongsTo(models.Customer);
  };
  return Transaction;
};