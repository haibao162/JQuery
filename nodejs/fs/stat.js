var fs=require("fs");

console.log("�ļ���");
fs.stat('input.txt',function(err,stats){
if(err){
return console.error(err);
}
console.log(stats);
console.log("��ȡ�ļ���Ϣ�ɹ�");
//����ļ�����
console.log("�Ƿ����ļ�(isFile)?"+stats.isFile());
console.log("�Ƿ�ΪĿ¼(isDirectory)?"+stats.isDirectory());
});