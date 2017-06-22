var express = require('express');
var app = express();
var fs = require("fs");
var mysql = require('mysql');
var bodyParser = require('body-parser');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "HSC_Lib"
});

app.use(bodyParser.json())

app.get('/listUsers', function (req, res) {
fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
	
//var jsondata = req.body;
console.log(req.data)
var values = [];
console.log(values)
for(var i=0; i< data.length; i++)
  values.push([data[i].name,data[i].password,data[i].profession,data[i].id]);
console.log(values)
//connection.query('INSERT INTO members (name , password , profession ,id) VALUES ?', [values])
   
 //var sql = "INSERT INTO BLE_info (name , password , profession ,id) VALUES ?', [data]";
   con.query("SELECT * FROM BLE_info", function (err, result) {
    if (err) throw err;
    //console.log(result);
  
   })
 
       //console.log( data );
      res.end( data ); 
   });

});


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
