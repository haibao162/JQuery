var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html',function(req,res){
res.sendFile(__dirname+"/"+"index.html");
//输入http://localhost:8081/index.html，返回__dirname/public/index.html
})


app.get('/process_get',function(req,res){
//输出json格式
response={
 first_name:req.query.first_name,
 last_name:req.query.last_name
};
 
 //res.end(JSON.stringify(response));

res.send("<h1>first name:"+req.query.first_name+"</h1><h2>last name"+req.query.last_name+"</h2>");

})

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.post('/post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   //console.log(response);
   
res.send("<h1>age:"+req.body.age+"</h1><h2>salary:"+req.body.salary+"</h2>");
})





app.listen(8081);