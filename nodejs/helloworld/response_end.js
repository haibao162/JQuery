var http=require('http');
http.createServer(function(request,response){
response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
if(request.url!=="/favicon.ico"){//清除第2此访问
response.write("response.write<br>");
response.end("response.send");//不写则没有http协议尾,但写了会产生两次访问  
}


}).listen(8000);