var user = require('../user.js');
var skills = require('../skillz.js');

module.exports = {
  getName: function(req, res){
    res.json(user.name);
  },
  getLocation: function(req, res){
    res.json(user.location);
  },
  getOccupations: function(req, res){
    if(req.query.order === "asc"){
      res.json(user.occupations.sort());
    }
    else if(req.query.order === "desc"){
      res.json(user.occupations.reverse());
    }
    else{
      res.json(user.occupations);
    }
  },
  getLatestOcc: function(req, res){
    res.json(user.occupations.slice(1));
  },
  getHobbies: function(req, res){
    res.json(user.hobbies);
  },
  getHobbyType: function(req, res){
    var typeHobby = user.hobbies.filter(
    function (hobbies) {
      return hobbies.type.toLowerCase() === req.params.type.toLowerCase();
    });
    res.json(typeHobby);
  },
  getFamily: function(req, res){
    res.json(user.family);
  },
  getFamilyGen: function(req, res){
    var typeGen = user.family.filter(
    function (family) {
      return family.gender.toLowerCase() === req.params.gender.toLowerCase();
    });
    res.json(typeGen);
  },
  getRestaurants: function(req, res){
    res.json(user.restaurants);
  },
  getRestaurantsRating: function(req, res){
    var typeRate = user.restaurants.filter(
    function(restaurants){
      return restaurants.rating >= parseInt(req.params.rating);
    });
    res.json(typeRate);
  },
  getRestaurantName: function(req, res){
    //  user.restaurants.replace(/\s+/g, '');
    var typeName = user.restaurants.filter(
    function (restaurants) {
      return restaurants.name.toLowerCase() === req.params.name.toLowerCase();
    });
    res.json(typeName);
  },
  putName: function(req, res){
    user.name = req.params.name;
    res.json(user.name);
  },
  putLoc: function(req, res){
    user.location = req.params.location;
    res.json(user.location);
  },
  postHobby: function(req, res){
    user.hobbies.push(req.body);
    res.json(user.hobbies);
  },
  postOcc: function(req, res){
    user.occupations.push(req.body);
    res.json(user.occupations);
  },
  postFamily: function(req, res){
    user.family.push(req.body);
    res.json(user.family);
  },
  postRes: function(req, res){
    user.restaurants.push(req.body);
    res.json(user.restaurants);
  },
  getSkills: function(req, res){
    if(req.query.id){
      res.json(skills.skillsList.filter());
    }
    else if(req.query.experience){
      res.json(skills.skillsList.filter());
    }
    else{
      res.json(skills.skillsList);
    }
  }
};
