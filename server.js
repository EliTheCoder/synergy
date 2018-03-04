// Dis is Eli's server code. Pweez do not touch because he spent a lot of time on it :).
const express = require('express');
const path = require();
const app = express();

//Static resources server
app.use(express.static(path.join(__dirname, '/static')));

const server = app.listen(process.env.PORT || 8082, function() {
  const port = server.address().port;
  console.log('Server running at port %s', port);
});

const io = require('socket.io')(server);

/* Connection events */

io.on('connection', function(socket) {
  console.log('User connected');
  socket.on('move', function(data) {
    socket.broadcast.emit('addcube', {
      x: data.x,
      y: data.y
    });
  });
});
