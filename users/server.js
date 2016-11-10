var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');
var app = express();
var corsOptions = {
  origin: 'http://localhost:8080'
};

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}));

console.log(__dirname);

app.listen(8080, function(){
  console.log("Successfully listening on : 8080");
});

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getProfiles);
