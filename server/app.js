var config       = require('./config')
  , bodyParser   = require('body-parser')
  , cookieParser = require('cookie-parser')()
  , session      = require('./session')
  , passport     = require('passport')
  , db           = require('./models');

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

db
  .sequelize
  .sync()
  .complete(function(err) {
    if (err) {
      throw err[0];
    } else {
      server.listen(config.port, config.host, function(){
        console.log('Express server (' + config.host + ') listening on port ' + config.port);
      })
    }
  })
