function fn(num,callback){
	callback(num);
}

fn(10,function(m){
	console.log(m);
});

function haveBreakfast(food,drink,callback){
console.log('breakfast'+food+","+drink);
if(callback&&typeof(callback)==="function"){
callback();
}
}
haveBreakfast('toast','coffee',function(){
	console.log("breakfast end");
});

function testCb(a,b,haibao){
console.log('console'+a+","+b);
haibao();
}
testCb('test','cb',function(){
	console.log("test end");
});


(function calculate(i){
if(i==10){
process.exit();
}
console.log(i);
calculate(i+1);
})(0);