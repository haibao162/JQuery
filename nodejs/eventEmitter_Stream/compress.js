var fs=require('fs');
var zlib=require('zlib');


// ѹ�� input.txt �ļ�Ϊ input.txt.gz
fs.createReadStream('input.txt').pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.zip'));

console.log('�ļ�ѹ�����');