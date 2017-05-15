var fs=require('fs');
//异步读取
fs.readFile('input.txt',function(err,data){
if(err){
return console.error(err);
}
console.log(data);
console.log(data.toString());
});
var data = fs.readFileSync('input.txt');
console.log( data.toString());