var config  = require('./config')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')()
  , session = require('./session')
  , passport = require('passport');

var app = require('express')();
var server = require('http').Server(app);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser);
app.use(session);

app.use(passport.initialize());
app.use(passport.session());

require('./static')(app);
require('./auth')(app);
require('./io')(server);

app.get('/123', function (req, res) {
  res.end(req.user && req.user.email);
})

server.listen(config.port, config.host);