var express = require('express');
var router = express.Router();
var engines = require('consolidate');
//router.engine('html', engines.mustache);
//router.set('view engine', 'html');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('roast.html', { root: 'public' });
})

module.exports = router;
