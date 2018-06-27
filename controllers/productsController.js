var controller = {};
var async = require('async')

var models = require('../models');

controller.getAll = function(callback){
    models.Product
    .findAll()
    .then(function(products){
        callback(products);
    })
};

controller.getById = function(id, callback){
    models.Product
    .findOne({ 
        where: {id: id},
    })
    .then(function(product){
        callback(product);
    });
};

module.exports = controller;