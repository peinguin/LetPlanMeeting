var passport         = require('passport')
  , config           = require('./config')
  , db               = require('./models')
  , GoogleStrategy   = require('passport-google').Strategy
  , TwitterStrategy  = require('passport-twitter').Strategy
  , FacebookStrategy = require('passport-facebook').Strategy
  , LocalStrategy    = require('passport-local').Strategy;

module.exports = exports = function(app){
  passport.serializeUser(function(user, done) { 
    // please read the Passport documentation on how to implement this. We're now
    // just serializing the entire 'user' object. It would be more sane to serialize
    // just the unique user-id, so you can retrieve the user object from the database
    // in .deserializeUser().
    done(null, user);
  });

  passport.deserializeUser(function(user, done) { 
    // Again, read the documentation.
    done(null, user);
  });

  passport.use(new GoogleStrategy({
      returnURL: config.proto + '://' + config.host + '/auth/google/return',
      realm: config.proto + '://' + config.host + '/'
    },
    function(identifier, profile, done) {
      /*app.findOrCreate({ openId: identifier }, function(err, auth) {
        done(err, auth);
      });*/
    }
  ));

  app.get('/auth/google', passport.authenticate('google'));

  app.get('/auth/google/return', 
    passport.authenticate('google', { successRedirect: '/',
                                      failureRedirect: '/login' }));

  if(
    typeof config.auth.twitter === 'object' &&
    typeof config.auth.twitter.key === 'string' &&
    typeof config.auth.twitter.key.length > 0 &&
    typeof config.auth.twitter.secret === 'string' &&
    typeof config.auth.twitter.secret.length > 0
  ){
    passport.use(new TwitterStrategy({
        consumerKey: config.auth.twitter.key,
        consumerSecret: config.auth.twitter.secret,
        callbackURL: config.proto + '://' + config.host + '/auth/twitter/callback'
      },
      function(token, tokenSecret, profile, done) {
        /*app.findOrCreate(..., function(err, auth) {
          if (err) { return done(err); }
          done(null, auth);
        });*/
      }
    ));

    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback', 
      passport.authenticate('twitter', { successRedirect: '/',
                                         failureRedirect: '/login' }));
  }
  if(
    typeof config.auth.facebook === 'object' &&
    typeof config.auth.facebook.id === 'string' &&
    typeof config.auth.facebook.id.length > 0 &&
    typeof config.auth.facebook.secret === 'string' &&
    typeof config.auth.facebook.secret.length > 0
  ){
    passport.use(new FacebookStrategy({
        clientID: config.auth.facebook.id,
        clientSecret: config.auth.facebook.secret,
        callbackURL: config.proto + '://' + config.host + '/auth/facebook/callback'
      },
      function(accessToken, refreshToken, profile, done) {
        /*app.findOrCreate(..., function(err, auth) {
          if (err) { return done(err); }
          done(null, auth);
        });*/
      }
    ));

    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook',
      passport.authenticate('facebook', { scope: ['read_stream'] }));
  }

  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'passwd'
    },
    function(authname, password, done) {
      done(null, {id: 0, email: 'tmp'});
      /*app.findOne({ authname: authname }, function(err, auth) {
        if (err) { return done(err); }
        if (!auth) {
          return done(null, false, { message: 'Incorrect authname.' });
        }
        if (!app.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, auth);
      });*/
    }
  ));

  app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/login',
                                     failureFlash: false }));

  app.post('/register', function(){

  });

};