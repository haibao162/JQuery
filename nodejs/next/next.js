var express=require('express');
var app=express();
var router=express.Router();


app.use('/index',function(req,res,next){
console.log("1");

next();
})

app.use('/index',function(req,res){
console.log("2");
res.send('dddwww');
})
app.listen(3000);

