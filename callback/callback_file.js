var fs=require('fs');
http = require('http');
//  http.get({ host: 'baidu.com' }, function(res) {
//       console.log(" 从baidu.com获取相应");
//   }).on('error', function(e) {
//       console.log("访问页面出现错误");
//   });
// http.get({host: 'www.sina.com.cn' }, function(res) {
//       console.log("从sina.com.cn获取相应");
//   }).on('error', function(e) {
//       console.log("从sina.com.cn获取相应失败");
//   });
fs.readFile('file111.txt','utf8',function(err,data){
if(err) throw err;
console.log("File111被读取,内容是"+data);
});
 
fs.readFile('file2.txt','utf8',function(err,data){
if(err) throw err;
console.log("File2被读取,内容是"+data);
});
console.log(2222222232323);
for(var i=1;i<=3;i++){

	setTimeout(function(){
		console.log(i);
	},0);
}












