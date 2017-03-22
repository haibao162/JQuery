var express=require('express');
var app=express();
var path = require('path');

app.get('/',function(req,res){
res.sendFile(__dirname+'/public/index.html');
});



app.listen(3000,function afterListen(){
console.log('express running on the http://localhost:3000');
});