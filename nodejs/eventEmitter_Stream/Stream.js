var fs=require('fs');

//读文件
var data='';

//创建可读流
var readerStream=fs.createReadStream('Stream.txt');

//设置编码为utf-8
readerStream.setEncoding('utf-8');

//处理流
readerStream.on('data',function(chunk){
data+=chunk;
});


readerStream.on('end',function(){
console.log('Stream中文中文中文');
console.log(data);
});

readerStream.on('error',function(err){
console.log(err.stack);
});

