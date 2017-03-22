var express=require('express');
var app=express();
var fs=require('fs');
var readStream=fs.createReadStream('./readStream.json');
var writeStream=fs.createWriteStream('./writeStream.json');
readStream.pipe(writeStream);
app.listen(3000);

