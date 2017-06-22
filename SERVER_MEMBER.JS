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
  password: "root",
  database: "HSC_Lib"
});

app.get('/favicon.ico', function(req, res) {
    res.send(204);
});


app.get('/test/:name/:address', function (req, res) {
   res.send('Hello World');
   console.log("id = " + req.params.name + "    UUID= " + req.params.address);
   var arr = req.params.address.split(" ");
   console.log(arr);
})

//con.connect(function(err) {
  //if (err) throw err;
 // console.log("Connected!");

app.get('/:name/:address', function (req, res) {
   res.send('Hello World');
//var sql = "INSERT IGNOR INTO members SET ?"
  //var sql = "INSERT INTO members (name) SELECT @name WHERE NOT EXISTS (SELECT * FROM members WHERE name = @name) SET ?";

  var sql = "INSERT INTO member VALUES ('"+req.params.name+"','"+req.params.address+"') ON DUPLICATE KEY UPDATE name='kk'";
 var values = {name :req.params.name,address:req.params.address};
//var condition = "WHERE name IS NOT NULL" 
  con.query(sql,function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

   // WHERE NOT EXISTS (SELECT * FROM members WHERE name = @req.params.name \
              //AND address = @req.params.address
  

  con.query("SELECT * FROM member", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });

//});
})


app.get('/delete',function (req, res){
con.connect(function(err){
  con.query("DELETE FROM members",function (err){
    if(err) throw err;
    console.log("data deleted");
  });
})
});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})