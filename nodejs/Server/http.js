var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(request,response){
var pathname=url.parse(request.url).pathname;
console.log(pathname);


fs.readFile(pathname.substr(1),function(err,data){
if(err){
console.log(err);
response.writeHead(404,{'Content-Type':'text/html'});
}else{
	response.writeHead(200,{'Content-Type':'text/html'});
	console.log(data.toString());
	response.write(data.toString());
}
});
}).listen(3000);