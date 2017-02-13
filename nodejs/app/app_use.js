var express=require('express');
var app=express();
var haibao={"name":"jaxin","age":"25","salary":10000};
app.set('env',haibao);
console.log(app.get('env'));
//Êä³öjson