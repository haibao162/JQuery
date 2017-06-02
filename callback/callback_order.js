var fs=require('fs');

var mysql=require('mysql');
var config=require('./configmysql.json');
var connection = mysql.createConnection(config);
var data=[];
http = require('http');

function test(){
connection.connect();

var sql='select * from raspberry';

connection.query(sql,function(err,result){
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
console.log(result);
console.log(result[0].device_name);
data=result;
});
//console.log(data);
connection.end();
}

function sync(fn,callback){
callback(fn);
}
// sync(test,function(test){
// 	test();
// 	console.log(data);
// });


// sync(function(){
// 	 http.get({ host: 'baidu.com' }, function(res) {
//       console.log(" 从baidu.com获取相应");
//   }).on('error', function(e) {
//       console.log("访问页面出现错误");
//   });
// },            function(fn){
// fn();
// fs.readFile('file1.txt','utf8',function(err,data){
// if(err) throw err;
// console.log("File1被读取,内容是"+data);
// });
// });


//执行顺序f1,f2,f3
//一些nodejs实现同步的方法:http://www.cr173.com/html/13900_1.html
function f1(callback){
	fs.readFile('file1.txt','utf8',function(err,data){
if(err) throw err;
console.log("File1被读取,内容是"+data);
});
console.log("f1 function");
callback(3);
}
function f2(callback){
	fs.readFile('file2.txt','utf8',function(err,data){
if(err) throw err;
console.log("File2被读取,内容是"+data);
});
console.log("f2 function");
callback(2);
}
function f3(callback){

	
callback(1);

}
// f3(function(){
// 	f2(function(){
// 		f1(function(){});
// });
// });

f1(function(){
	f2(function(){});
});


//fun1,fun2,fun3同步执行
// var func1 = function(req,res,callback){
//   setTimeout(function(){
//     console.log('in func1');
//     http.get({ host: 'baidu.com' }, function(res) {
//       console.log(" 从baidu.com获取相应");
//   }).on('error', function(e) {
//       console.log("访问页面出现错误");
//   });
//     callback(req,res,1);  
//   },13000);
// }
// var func2 = function(req,res,callback){ 
//   setTimeout(function(){
//     console.log('in func2');
//     fs.readFile('file1.txt','utf8',function(err,data){
// if(err) throw err;
// console.log("File1被读取,内容是"+data);
// });
//     callback(req,res,2);
//   },5000);
// }

// var func3 = function(req,res,callback){
//   setTimeout(function(){
//     console.log('in func3');
//     callback(req,res,3);   
//   },1000);
// }

// var req = null;
// var res = null;

// func1(req,res,function(){
//   func2(req,res,function(){
//     func3(req,res,function(){
//      // process.exit(0);   
//     })  
//   });  
// });
