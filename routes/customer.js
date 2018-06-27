var express = require('express');
var router = express.Router();

var customersController = require('../controllers/customerController');
// router.get('/', function(req, res){
//     articlesController.getAll(function(articles){
//         res.render('index', {articles: articles});
//     });
// });

router.get('/:id', function(req, res){
    let id = req.params.id;
	customerController.getById(id, function (customer) {
        res.render('/client', {customer: customer});
    });
});

// router.post('/', function(req,res){
//     var string = req.body.name.split(' ');
//     var temp = [];
//     for (let i = 0; i < string.length; ++i){
//         let a = '%' + string[i] + '%';
//         temp.push({title: {$ilike: a}});
//         temp.push({summary: {$ilike: a}});
//         temp.push({description: {$ilike: a}});
//     }
//     articlesController.search(temp, function(articles){
//         res.render('index', {articles: articles});
//     });
// });
module.exports = router;