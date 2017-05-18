var express = require('express');
var app = express();
app.use('/',express.static('public'));//设置静态目录public,http://localhost:7000/index.html打开public/index.html
//http://localhost:7000/index2.html打开public/index2.html
app.listen(7000);

  