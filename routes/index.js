var express = require('express');
var router = express.Router();

var productModel = require('../model/product.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  productModel.find().sort({createDate: -1})
  .skip(0)
  .limit(3)
  .then(function(data) {
  	res.render("index", {data: data});
  });
});

router.get('/san-pham', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

router.get('/danh-muc', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

router.get('/chi-tiet-san-pham', function(req, res, next) {
  res.render('single', { title: 'Express' });
});

module.exports = router;
