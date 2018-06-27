var express = require('express');
var router = express.Router();

var customersController = require('../controllers/customerController');

router.get('/', (req, res)=>{
    res.render('client/client', {layout: "layoutClient"})
});

router.get('/shop', (req, res)=>{
	res.render('client/shop', {layout: "layoutClient"});
});


router.get('/design', (req, res)=>{
	res.render('client/design', {layout: "layoutClient"});
});

router.get('/cart', (req, res)=>{
	res.render('client/cart', {layout: "layoutClient"});
});

router.get('/modifyClient', (req, res)=>{
	res.render('client/modifyClient', {layout: "layoutClient"});
});

module.exports = router;