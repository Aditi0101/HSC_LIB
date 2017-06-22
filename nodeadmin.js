var express = require('express');
var app = express();
 
var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));