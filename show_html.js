var express = require('express');
var app = express();

var mysql = require('mysql');

var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'HSC_Lib'
});

conn.connect();

app.get('/test', function(request, response){
   // var i = 4
    //while(i--){
        conn.query('select * from sla2', function(error, results){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.setHeader('Content-Type', 'text/plain');
           response.send(results);
           // response.end(results);
            //JSON.stringify(results)
            //console.log(response);
        }
    });
        conn.query('select * from sla1', function(error, result){
        if ( error ){
            response.status(400).send('Error in database operation');
        } else {
            response.setHeader('Content-Type', 'text/plain');
           response.send(result);
           // response.end(results);
            //JSON.stringify(results)
            //console.log(response);
        }
    });
   // }
    
});

app.listen(8081, function () {
    console.log('Express server is listening on port 8081');
});