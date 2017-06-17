var fs=require("fs");
function callback(err,data){
if(err){
	console.log("error");
}else{
	console.log(data);
}
}
fs.readFile('file1.txt','utf8',callback);
console.log("read file async end");