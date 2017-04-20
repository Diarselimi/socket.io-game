var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('new_user', function(msg){
        io.emit('new_user', msg);
    });
});

http.listen(8080, function(){
  console.log('listening on *:3000');
});