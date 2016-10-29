var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var controller = require('./mainCtrl.js');

var app = express();
app.use(bodyParser.json());
app.use(cors());



app.listen(8080, function(){
  console.log("Successfully listening on : 8080")
})
