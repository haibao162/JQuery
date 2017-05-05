
var mysql=require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'haibao162',
  password : '123789',
  database : 'haibao162'
});
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
connection.end();
