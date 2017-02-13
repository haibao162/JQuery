var express=require('express');
var app=express();
//var routes=require('./index');
//app.use('/test-public',routes);

var rou=require('./index');
app.use('/test1',rou);
app.listen(3000);

//http://localhost:3000/test1/index输出index.js中的路径内容。