var express=require('express');
//console.log(express);
var app=express();
app.get('/index',function(req,res){
res.send('hello world');
});
app.listen(3000);
console.log("http://localhost:3000/index run");