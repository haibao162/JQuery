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

//require ���ڴ��ⲿ��ȡһ��ģ��Ľӿڣ�������ȡģ��� exports ����
//hello.js ͨ�� exports ����� world ��Ϊģ��ķ��ʽӿڣ�
//�� main.js ��ͨ�� require('./hello') �������ģ�飬Ȼ��Ϳ���ֱ�ӷ� �� hello.js �� exports ����ĳ�Ա�����ˡ�














