var fs=require("fs");
console.log("准备写入文件");
fs.writeFile('input.txt','我是通过写入的文件内容',function(err){
if(err){
return console.error(err);
}
console.log("数据写入成功");
console.log("读取写入到数据");
fs.readFile('input.txt',function(err,data){
if(err){return console.error(err);
}
console.log(data.toString());
});
});