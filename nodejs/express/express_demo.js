var express = require('express');
var app = express();
var admin=express();

admin.get('/', function (req, res) {
 console.log(admin.mountpath);
  res.send('admin homepage');
 
})
app.use('/admin',admin);

var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;
   
  console.log(" http://%s:%s", host, port);

})