var express=require('express');
var app=express();
var path = require('path');

// app.get('/',function(req,res){
// res.sendFile(__dirname+'/public/css3-tab-menu-simple/index.html');
// });
app.get('/list',function(req,res){
res.sendFile(__dirname+'/public/css3-tab-menu-simple/index.html');
});


app.listen(3000,function afterListen(){
console.log('express running on the http://localhost:3000');
});



var query_finished = function(result) {

        console.log(result);

}
query_finished("result");