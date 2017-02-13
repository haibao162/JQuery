exports.world=function(){

console.log('Hello World');
var test1=new f();   //This is f().
var test2=f;
console.log(test1);  //f{}
console.log(test2);  //[Function:f]
}

exports.func=f;
function f(){
console.log('This is f().');
}

function g(){
return 'haibao';
}
exports.g=g();

function hai(a){
console.log(a);
}
exports.h=hai;
exports.abc =function(x,y){return x*y;};

//require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
//hello.js 通过 exports 对象把 world 作为模块的访问接口，
//在 main.js 中通过 require('./hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。














