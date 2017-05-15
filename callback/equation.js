var res=[16,10,11,8,2];
var l=res.length;
var variables=[];
for(var i=0;i<l;i++){
	if(i==l-1){
		variables[i]=res[i];
		process.exit;	
	}
	else{
//1.
//variables[i]=Minus(res[i],res[i+1]);
//2.一个直接return,一个使用回调
Minus(res[i],res[i+1],function(t){
	variables[i]=t;
	});
res[i+1]=Plus(res[i],res[i+1]);
}
}
//1.
// function Minus(x,y){
// return (x-y)/2;
// }

function Plus(x,y){
	return (x+y)/2;
}
//2.
function Minus(x,y,callback){
var z=(x-y)/2;
callback(z);
}

console.log(variables);
