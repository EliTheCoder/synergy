// change this if you want:

const port = 80;

// no food or drink beyond this point
const express = require('express');
const path = require("path");
const app = express();

function logMessage(type, message) {
  let typeString;
  switch (type) {
    case 0:
      typeString = "INFO";
      break;
    case 1:
      typeString = "WARNING";
      break;
    case 2:
      typeString = "ERROR";
      break;
    default:
      typeString = "LOG";
  }
  let datestamp = "";
  datestamp += new Date();
  console.log(`[${typeString.toUpperCase()}] {${datestamp.toUpperCase()}} ${message.toUpperCase()}`);
}

// pull git on GitHub push
app.post('/push', (req, res) => {
  logMessage(0, "/push request statement: " + req.ref);
});

// provides static file like index.html and main.js
app.use(express.static(path.join(__dirname, '/static')));

const server = app.listen(process.env.PORT || port, () => {
  logMessage(0, "SERVER RUNNING: PORT: " + port);
});

const io = require('socket.io')(server);

io.on('connection', socket => {
  logMessage(0, "CLIENT CONNECTED WITH IP ADDRESS: " + socket.request.connection.remoteAddress.split(':').slice(3)[0]);
  socket.on('move', data => {
    socket.broadcast.emit('movePlayer', {
      //uuid: socket.id,
      xval: data.x,
      yval: data.y
    });
  });
  socket.on('sudo', data => {
    socket.broadcast.emit('sudo', data);
  });
  socket.on('say', data => {
    socket.broadcast.emit('say', data);
  });
});
