console.log(__filename);
console.log(__dirname);
function printHello(){
console.log("Hello World!");
}
var t=setTimeout(printHello,2000);
//console.trace();
console.log(process.pid);
// 输出当前版本
console.log( process.version);

// 输出内存使用情况
console.log(process.memoryUsage());