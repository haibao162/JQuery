var fs=require('fs');
//写入流
var data2='写入文件writeStream.txt中';
var writerStream=fs.createWriteStream('writeStream.txt');

//使用utf-8编码写入数据
writerStream.write(data2,'UTF8');

//标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish',function(){
console.log('写入完成');
});

writerStream.on('error', function(err){
   console.log(err.stack);
});
