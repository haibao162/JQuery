var express=require('express');
var app=express();
var json=require('./array.json');
var array=require('./arr.json');
console.log(json);
console.log(array[0]);
console.log(typeof(array[0]));//object
app.listen(3000);