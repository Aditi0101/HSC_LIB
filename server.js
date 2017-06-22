/*
var express = require('express');
var app = express();
var url = require('url');
var s = 'vgjh'

app.post('/abc/:id', function (req, res) {
	 
	console.log(id)
   res.send('Hello World');
})

var server = app.listen(8081, function (req,res) {

   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})*/
var http = require('http');
var url = require('url');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "HSC_Lib"
});
app.get('/favicon.ico', function(req, res) {
    res.send(204);
});
//create a server object:
http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname;
	//console.log(req.url)
	
	var temp = pathname.split("/");
	//console.log(temp);
  var values = temp[1].split('+');
  //console.log(values)

  	if(values[0] != "favicon.ico"){
  		var sql = "INSERT INTO members (name,address) SET ?";
		var tt =  [[name: values[0]], [address: values[1]];
	console.log(tt);
  con.query(sql,[tt], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
console.log("hello")}
  else
  	console.log("kaddu"+ values[0])
console.log("kjhdflkdskjf")
  //con.query("SELECT * FROM members", function (err, result){
  	//console.log('yez')
  	//console.log(result);
 // });
  	  
  
  /*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO members (name, address) VALUES ?";
  var values = pathname.split('+');
	});*/
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);