var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'claire come up with a witty name for the word game challenge 2023 (easy)' });
});

module.exports = router;
