var fs=require('fs');
var zlib=require('zlib');

//解压input.tar.gz文件为input2.txt
fs.createReadStream('input.zip')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input2.txt'));