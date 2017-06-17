var fs=require('fs');

var mysql=require('mysql');
var config=require('./configmysql.json');
var connection = mysql.createConnection(config);
var data=[];


connection.connect();

var sql='select * from raspberry';

connection.query(sql,function(err,result){
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
        }else{
        //console.log(result);
        //console.log(result[0].device_name);
        data=result;
        }
});
setTimeout(function(){console.log(data);},12);//如果输出[],12改成100试试
connection.end();
//http://blog.csdn.net/hj08053127/article/details/69258488