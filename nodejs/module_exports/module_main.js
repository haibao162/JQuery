var http = require('http');    

var  Teacher  =  require('./Teacher');
http.createServer(function     (request,        response)        {        
                response.writeHead(200,        {'Content-Type':        'text/html;        charset=utf-8'});        
        if(request.url!=="/favicon.ico"){        //�����2�˷���
          teacher  =  new  Teacher(1,'����',30);
          teacher.teach(response);
          response.end('');    
    }
}).listen(8000);