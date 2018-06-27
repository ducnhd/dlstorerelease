var controller = {};
var async = require('async')

var models = require('../models');

controller.getAll = function(callback){
    models.Type
    .findAll()
    .then(function(types){
        callback(types);
    })
};

module.exports = controller;