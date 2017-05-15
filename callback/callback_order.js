var fs=require('fs');

var mysql=require('mysql');
var config=require('./configmysql.json');
var connection = mysql.createConnection(config);
var data=[];
connection.connect();

var sql='select * from raspberry';

connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
console.log(result);
console.log(result[0].device_name);
data=result;
});
console.log(data);
connection.end();
