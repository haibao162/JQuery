var express = require('express');
var router = express.Router(); 
router.get('/index', function(req, res, next)
{ res.send('hello, nodejs11'); });
module.exports = router;