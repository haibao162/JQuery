var fs=require('fs');


//����һ���ɶ���
var readerStream=fs.createReadStream('input.txt');

//����һ����д��
var writerStream=fs.createWriteStream('output.txt');

//�ܵ���д����
//��дinput.txt���ݣ�д�뵽output.txt�ļ���
readerStream.pipe(writerStream);

