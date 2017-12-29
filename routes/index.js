var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/san-pham', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

router.get('/chi-tiet-san-pham', function(req, res, next) {
  res.render('single', { title: 'Express' });
});

module.exports = router;
