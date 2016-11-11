const express = require('express');
const bodyParser = require('bodyParser');
const massive = require('massive');
const passport = require('passport');
const cors = require('cors');
const cookieParser = require('cookieParser');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
// app.use(express.static)


passport.use(new FacebookStrategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['id', 'displayName']
},
function(accessToken, refreshToken, profile, done){
  db.getUserByFacebookId([profile.id], function(err, user){
  user = user[0];
    if (!user) {
      console.log('CREATING USER');
      db.creatUserFacebook([profile.displayName, profile.id], function(err, user){
        return done(err, user, {scope: 'all'});
      });
    }else {
      return done(err, user);
    }
  });
}));


app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {session: false}), function(req, res){
    const token = jwt.sign(req.user, config.secret);
    res.cookie('my-token', token, {maxAge: 10000});
    res.status(200).redirect('/#/');
});
