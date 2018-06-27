'use strict';
module.exports = (sequelize, DataTypes) => {
  var Productdetail = sequelize.define('Productdetail', {
    totalProduct: DataTypes.INTEGER,
    totalPricing: DataTypes.INTEGER,
    imagepath: DataTypes.STRING,
  }, {});
  
  Productdetail.associate = function(models) {
    Productdetail.belongsTo(models.Product);
  };
  return Productdetail;
};