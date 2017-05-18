var express = require('express');
var app = express();



app.get('/', function (req, res) {
   app.use(express.static('public'));
})

app.listen(8081);

  