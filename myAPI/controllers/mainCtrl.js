var user = require('../user.js');

module.exports = {
 getName: function(req, res, next){
   res.json(user.name);
 },
 getLocation: function(req, res, next){
   res.json(user.location);
 },
 getOccupations: function(req, res, next){
   res.json(user.occupations);
 },
 getLatestOcc: function(req, res, next){
   res.json(user.occupations.slice(1));
 },
 getHobbies: function(req, res, next){
   res.json(user.hobbies);
 },
 getHobbyType: function(req, res, next){
   res.json(user.hobbies.filter(
    function (value) {
        return (value === user.hobbies.name);
    }));
 },
 getFamily: function(req, res, next){
   res.json(user.family);
 },
 getFamilyGen: function(req, res, next){
  //  res.json(user.name);
 },
 getRestaurants: function(req, res, next){
   res.json(user.restaurants);
 },
 getRestaurantName: function(req, res, next){
  //  res.json(user.name);
   }
};
