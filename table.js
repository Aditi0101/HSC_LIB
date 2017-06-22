
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "HSC_Lib"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql1 = "CREATE TABLE BLE_info (id_B VARCHAR(255), min INT, ,id VARCHAR(255))";
  var sql = "CREATE TABLE members (name VARCHAR(255), address VARCHAR(255))";
  var sql3 = "CREATE TABLE member (name VARCHAR(255), address VARCHAR(255),UNIQUE (name,address))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});