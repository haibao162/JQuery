var http=require('http');
http.createServer(function(request,response){
response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
if(request.url!=="/favicon.ico"){//�����2�˷���
response.write("response.write<br>");
response.end("response.send");//��д��û��httpЭ��β,��д�˻�������η���  
}


}).listen(8000);