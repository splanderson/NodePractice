var user = require('../user.js');

module.exports = {
 getName: function(req, res, next){
   res.json(user.name);
 },
 getLocation: function(req, res, next){
   res.json(user.location);
 },
 getOccupations: function(req, res, next){
  if(req.query.order === "asc"){
    res.json(user.occupations.sort());
  } else if(req.query.order === "desc"){
    res.json(user.occupations.reverse());
  } else{
   res.json(user.occupations);
  }
 },
 getLatestOcc: function(req, res, next){
   res.json(user.occupations.slice(1));
 },
 getHobbies: function(req, res, next){
   res.json(user.hobbies);
 },
 getHobbyType: function(req, res, next){
   var typeHobby = user.hobbies.filter(
    function (hobbies) {
        return hobbies.type.toLowerCase() === req.params.type.toLowerCase();
    });
    res.json(typeHobby);
 },
 getFamily: function(req, res, next){
   res.json(user.family);
 },
 getFamilyGen: function(req, res, next){
   var typeGen = user.family.filter(
    function (family) {
        return family.gender.toLowerCase() === req.params.gender.toLowerCase();
    });
    res.json(typeGen);
 },
 getRestaurants: function(req, res, next){
   res.json(user.restaurants);
 },
 getRestaurantsRating: function(req, res){
   var typeRate = user.restaurants.filter(
     function(restaurants){
       return restaurants.rating >= req.params.rating;
     }
   );
   res.json(typeRate);
 },
 getRestaurantName: function(req, res, next){
  //  user.restaurants.replace(/\s+/g, '');
   var typeName = user.restaurants.filter(
    function (restaurants) {
        return restaurants.name.toLowerCase() === req.params.name.toLowerCase();
    });
    res.json(typeName);
  }
};
