var express=require('express');
var app=express();

app.get('/',function(req,res){

res.send('hello get');
})


app.post('/',function(req,res){

res.send('hello post');
})



app.get('/del_user', function (req, res) {
   console.log("/del_user ��Ӧ DELETE ����");
   res.send('ɾ��ҳ��');
})

//  /list_user ҳ�� GET ����
app.get('/list_user', function (req, res) {
   console.log("/list_user GET ����");
   res.send('�û��б�ҳ��');
})

// ��ҳ�� abcd, abxcd, ab123cd, ����Ӧ GET ����
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET ����");
   res.send('����ƥ��');
})


app.listen(3000);