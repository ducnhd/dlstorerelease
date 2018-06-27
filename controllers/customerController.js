var controller = {};
var async = require('async')

var models = require('../models');

controller.getAll = function(callback){
    models.Customer
    .findAll()
    .then(function(customers){
        callback(customers);
    })
};

controller.getByUserName = function(name, callback){
    models.Customer
    .findOne({
        where: {
            userLogin: name
        }
    }, {
        raw: true
    })
    .then(function(customer){
        callback(customer);
    })
};

controller.getByUserName = function(name, callback){
    models.Customer
    .findOne({
        where: {
            userLogin: name
        }
    }, {
        raw: true
    })
    .then(function(customer){
        callback(customer);
    })
};

controller.getById = function(id, callback){
    models.Customer
    .findOne({
        where: {
            id: id 
        }
    }, {
        raw: true
    })
    .then(function(customer){
        callback(customer);
    })
};

controller.findById = function(id, callback){
    models.Customer
    .findOne({
        where: {
            id: id 
        }
    }, {
        raw: true
    })
    .then(function(customer){
        callback(customer);
    })
};

module.exports = controller;