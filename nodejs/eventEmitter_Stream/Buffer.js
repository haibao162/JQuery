
var iconv = require('iconv-lite');
var buf=new Buffer(10);
console.log(buf);
buf=new Buffer([10,20,30,40,50]);
console.log(buf);
buf =new Buffer(256);
len=buf.write("www.baidu.com");
console.log(len);

buf=new Buffer(26);
for(var i=0;i<26;i++){
buf[i]=i+97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
//utf-8 是默认的编码方式，此外它同样支持以下编码：
//"ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。

//将 Buffer 转换为 JSON 对象
var buf = new Buffer('www.runoob.com');
console.log(buf);
var json=buf.toJSON(buf);
console.log(json);


//copy 函数
var buffer1=new Buffer('ABC');
var buffer2=new Buffer(5);
buffer1.copy(buffer2);
console.log(buffer2.toString('ascii',0,buffer1.length));
console.log(buffer1.length);

var buffer=new Buffer('海宝');
console.log(buffer.toString());


















