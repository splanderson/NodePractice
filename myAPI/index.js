var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);


//Get Endpoints
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOcc);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbyType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGen);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantName);
app.get('/restaurants/:rating', mainCtrl.getRestaurantsRating);

//Put Endpoints
app.put('/name/:name', mainCtrl.putName);
app.put('/location/:location', mainCtrl.putLoc);

//Post Endpoints
app.post('/hobbies', mainCtrl.postHobby);
app.post('/occupations', mainCtrl.postOcc);
app.post('/family', mainCtrl.postFamily);
app.post('/restaurants', mainCtrl.postRes);

//Skillz Endpoints
app.get('/skills', mainCtrl.getSkills);


//Port
app.listen(8666, function(){
  console.log('Running on port 8666');
});
