console.log(__filename);
console.log(__dirname);
function printHello(){
console.log("Hello World!");
}
var t=setTimeout(printHello,2000);
//console.trace();
console.log(process.pid);
// �����ǰ�汾
console.log( process.version);

// ����ڴ�ʹ�����
console.log(process.memoryUsage());