var express = require('express');
var app = express();


app.get('/', function (req, res) {
   
   res.send('first nodejs ');
})

var server = app.listen(3000, function () {

  console.log("http£º//localhost:3000")

})