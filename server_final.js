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
    res.send(200);
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

app.get('/:id_R/:minor/:mojor/:distance', function (req, res) {
   
   //console.log(req.params.distance)
   if(req.params.distance <= 1.8){
//var sql = "INSERT IGNOR INTO members SET ?"
  //var sql = "INSERT INTO members (name) SELECT @name WHERE NOT EXISTS (SELECT * FROM members WHERE name = @name) SET ?";
 console.log(req.params.id_R)
  var sql = "INSERT INTO "+req.params.id_R+"(minor,major,dist,t_stamp,difference) VALUES ('"+req.params.minor+"','"+req.params.mojor+"','"+req.params.distance+"',CURRENT_TIMESTAMP, 0) \
  ON DUPLICATE KEY UPDATE t_stamp=CURRENT_TIMESTAMP, dist ="+req.params.distance;
  con.query(sql,function (err, result) {
      if (err) throw err;
    console.log("1 record inserted");
    con.query("SELECT * FROM "+req.params.id_R+"", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
  });
  });
}
else
console.log("distance more")
res.send("200");
  });
 // var sql = "INSERT INTO member VALUES ('"+req.params.name+"','"+req.params.address+"') ON DUPLICATE KEY UPDATE name='kk'";
 //var values = {name :req.params.name,address:req.params.address};
//var condition = "WHERE name IS NOT NULL" 
  
   // WHERE NOT EXISTS (SELECT * FROM members WHERE name = @req.params.name \
              //AND address = @req.params.address
  

  

//});
//})


app.get('/delete',function (req, res){
con.connect(function(err){
  con.query("DELETE FROM members",function (err){
    if(err) throw err;
    console.log("data deleted");
  });
})
});


var server = app.listen(8082, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})