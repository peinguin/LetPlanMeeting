var express = require('express');

module.exports = exports = function (app) {
  app.use(express.static(__dirname + '/../client'));
  app.use('/socket.io.js', express.static(__dirname + '/node_modules/socket.io-client/socket.io.js'));
}