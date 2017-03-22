var express=require('express');
var app=express();
var fs = require("fs");
var path=require('path');
//console.log(path.resolve(__dirname+"/example.html"));
 fs.readFile(path.resolve(__dirname+"/array.json"),'utf8', function (err, data) {
       //console.log(data);
       console.log(typeof(data));//string
       var k=JSON.parse(data);
       console.log(k.user1.name);
   });

fs.readFile(path.resolve(__dirname+"/test_array.json"),'utf8', function (err, data) {
      var t=JSON.parse(data);
      console.log(t.user1[3].name);
   });

fs.readFile(path.resolve(__dirname+"/arr.json"),'utf8', function (err, data) {
      var arr=data.substring(1,data.length-1).split(",");
      //console.log(arr);
      for(var s=0;s<arr.length;s++){

      	console.log(arr[s]);
      }

   });

app.listen(3000);