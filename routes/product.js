var express = require('express');
var router = express.Router();

var productsController = require('../controllers/productController');
// router.post('/', function(req, res) {
//     let articleId = req.body.articleId;
//     let comment = req.body.comment;
//     commentsController.post(articleId, comment, function(comment){
//         res.send(comment);
//     })
// });

// router.post('/modify', function(req, res){
// 	let id = req.body.id;
//     let articleId = req.body.articleId;
//     let comment = req.body.comment;
//     commentsController.put(comment, articleId, id, function(comments){
//         res.send(comments);
//     });
// })

// router.post('/delete', function(req, res){
//     let id = req.body.id;
//     let articleId = req.body.articleId;
//     console.log(id);
//     commentsController.delete(articleId, id, function(comments){
//         res.send(comments);
//     });
// });
module.exports = router;