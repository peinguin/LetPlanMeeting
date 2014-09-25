var socketConnect = function () {
  var socket = io(config.proto + '://' + config.host + ':' + config.port);
  socket.on('connect', function(){
    App.MainModel.set('connected', true);
    socket.on('hello', function(user){
      App.MainModel.set('user', user);
    });
    socket.on('disconnect', function(){
      App.MainModel.set('connected', false);
      App.MainModel.set('user', null);
    });
  });
};

App = Ember.Application.extend({
  init: function(){
    socketConnect();
    this._super();
  }
}).create();

App.MainModel = Ember.Object.extend({
  connected: false,
  user: null
}).create();

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.MainModel;
  }
});