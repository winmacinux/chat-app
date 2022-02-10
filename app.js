var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var index = require('./routes/index');

io.on('connection', function(socket){
  console.log("We are having a connection.");
  socket.on('test', function(msg){
    console.log('Please god work ', msg);
  });
  socket.on('new-message', function(msg){
    console.log('New Message Recieved: ', msg);
    io.emit('recieve-message', msg);
  });


});


app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname+ '/public'));
app.use('/', index);
app.listen(8080, function(){
  console.log("Listening to Port 8080");
});
module.exports = app;
