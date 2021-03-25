var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
let someNumber=Math.floor(Math.random()*100)
res.render('swa', { result:'atan is applied to '+someNumber+' is '+Math.atan(someNumber)});
});
module.exports = router;