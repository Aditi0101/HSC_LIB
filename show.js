var http = require('http');
var url = require('url');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.static('public'));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  //password: "root",
  database: "HSC_Lib"
});

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(200);
});

var data = [];
app.get('/show', function (req, res) {
   //res.send('See data on console');
//var sql = "INSERT IGNOR INTO members SET ?"
  //var sql = "INSERT INTO members (name) SELECT @name WHERE NOT EXISTS (SELECT * FROM members WHERE name = @name) SET ?";
 var i=4

 var tdata = []
 tdata.push("Reader1  ")
 tdata.push(data.pop())
 tdata.push("Reader2  ")
 tdata.push(data.pop())
 tdata.push("Reader3  ")
 tdata.push(data.pop())

res.send(tdata)

 //console.log("i")
 while(--i){
        
   con.query("UPDATE sla"+i+" SET difference = TIMESTAMPDIFF(SECOND, t_stamp, CURRENT_TIMESTAMP); ", function (err, result, fields) {
    if (err) throw err;
        
  });
 }
 
 var i=4
 //console.log("i")
 while(--i){
        
   con.query("DELETE FROM sla"+i+" WHERE difference>100", function (err)  {
    if (err) throw err;
        
  });
 }

 i=4
 data = [];
 while(--i)
 {
        
   con.query("SELECT minor,difference FROM sla"+i, function (err, result, fields) {
    if (err) throw err;
        console.log(result);
        data.push(result);
        //console.log(data)
        //if(i==1)
          //res.send(data)

  });
   
 }

  });
 

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})