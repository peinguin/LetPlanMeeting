var express = require('express')
  ,socket.io = require('socket.io')
  ,user     = require('./user')
  ,config   = require('./config');

var app = express();

io = socket.io(app);

user(io);

app.listen(config.port, config.host);
