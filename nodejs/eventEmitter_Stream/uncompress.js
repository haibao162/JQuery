var fs=require('fs');
var zlib=require('zlib');

//��ѹinput.tar.gz�ļ�Ϊinput2.txt
fs.createReadStream('input.zip')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input2.txt'));