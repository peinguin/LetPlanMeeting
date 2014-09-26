var socketIO = require('socket.io')
  , session = require('./session')
  , async = require('async');

var init = function(socket){
  socket.emit('hello', socket.request.session.passport.user);
  socket.on('getFriends', function () {
    console.log('getFriends request');
  });
}

module.exports = exports = function(server){
  var io = socketIO(server);

  var connect = function(socket){
    async.waterfall([
      function(cb){
        session(socket.request, {}, function(err){
          if(err){
            throw 'SESSION_PARSE_ERROR';
          }
          cb(null)
        });
      },
      function(cb){
        var session = socket.request.session;
        if(!session || !session.passport || !session.passport.user) {
          cb(null);
        }else{
          cb(null, session.passport.user);
        }
      }],
    function(err, user){
      if(err){
        throw JSON.stringify(err);
      }
      if(user){
        init(socket);
      }
    });
  }

  io.on('connection', connect);
}