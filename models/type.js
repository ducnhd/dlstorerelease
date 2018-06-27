'use strict';
module.exports = (sequelize, DataTypes) => {
  var Type = sequelize.define('Type', {
    Name: DataTypes.STRING
  }, {});
  return Type;
};