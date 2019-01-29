var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.resolve(__dirname, '../views/gravity_demo.html'));
});

module.exports = router;
