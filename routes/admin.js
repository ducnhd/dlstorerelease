var express = require('express');
var router = express.Router();

var customersController = require('../controllers/customerController');

router.get('/', (req, res)=>{
	res.render('admin/admin', {layout: "layoutAdmin"})
})

router.get('/bill', (req, res)=>{
	res.render('admin/bill', {layout: "layoutAdmin"})
})

router.get('/customer', (req, res)=>{
	customersController.getAll((customers)=>{
		res.render('admin/customer', {layout: "layoutAdmin", customers: customers})
	})
})

router.get('/clothes', (req, res)=>{
	res.render('admin/clothes', {layout: "layoutAdmin"})
})

router.get('/partern', (req, res)=>{
	res.render('admin/partern', {layout: "layoutAdmin"})
})

router.get('/post', (req, res)=>{
	res.render('admin/post', {layout: "layoutAdmin"})
})

module.exports = router;