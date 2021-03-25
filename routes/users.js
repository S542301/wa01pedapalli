var express = require('express');
var router = express.Router();
var swa=0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  swa=swa+1;
  res.send('User accesses are: '+swa);
});

module.exports = router;
