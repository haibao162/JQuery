var util=require('util');
function Base(){
this.name='base';
this.base=1991;
this.sayHello=function(){
console.log(this.name);
};
}
Base.prototype.showName=function(){
console.log(this.name);
}
function Sub(){
this.name='sub';
}
util.inherits(Sub,Base);
var objBase=new Base();
console.log(objBase.name);   //base
objBase.showName(); 
objBase.sayHello(); 


var objSub=new Sub();
console.log(objSub.name);    //sub
objSub.showName();

