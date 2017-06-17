var fs=require('fs');

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


//执行顺序f1,f2中的io
//一些nodejs实现同步的方法:http://www.cr173.com/html/13900_1.html
function f1(callback){
	fs.readFile('file111.txt','utf8',function(err,data){
if(err) throw err;
console.log("File111被读取,内容是"+data);
});
callback();
}
function f2(callback){
	fs.readFile('file2.txt','utf8',function(err,data){
if(err) throw err;
console.log("File2被读取,内容是"+data);
});

callback();
}
function f3(callback){
callback();

}
// f3(function(){
// 	f2(function(){
// 		f1(function(){});
// });
// });

f2(function(){
	f1(function(){});
});

//同步方法

var data1 = fs.readFileSync('file111.txt');
var data2 = fs.readFileSync('file2.txt');
//console.log(data1.toString());
setTimeout(function(){console.log(data2.toString())},100);
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


//async:http://blog.fens.me/nodejs-async/