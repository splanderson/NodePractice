var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('config');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

var corsOptions = {
  origin: 'http://localhost:8080'
};

app.use(session({ secret: config.sessionSecret }));

app.listen(8080, function(){
  console.log("Successfully listening on : 8080")
})
