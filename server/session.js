var config = require('./config');

var COOKIE = 'connect.sid';

var session = require('express-session')({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  name: COOKIE
});
session.COOKIE = COOKIE;

module.exports = exports = session;