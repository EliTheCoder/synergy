// change this if you want:

const port = 80;

// no food or drink beyond this point
const express = require('express');
const path = require("path");
const app = express();
const util = require('util');

let clients = [0, 0, 0, 0];

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
  logMessage(0, "/push request statement: " + req.body.ref);
});

// provides static file like index.html and main.js
app.use(express.static(path.join(__dirname, '/static')));

const server = app.listen(process.env.PORT || port, () => {
  logMessage(0, "SERVER RUNNING: PORT: " + port);
});

const io = require('socket.io')(server);

io.on('connection', socket => {
  logMessage(0, "CLIENT CONNECTED WITH IP ADDRESS: " + socket.request.connection.remoteAddress.split(':').slice(3)[0]);

  if (clients.indexOf(0) !== -1) {
    socket.emit('setColor', clients.indexOf(0) + 1);
    clients[clients.indexOf(0)] = socket.id;
  } else {
    socket.emit('setColor', 0);
  }


  socket.on('move', data => {
    socket.broadcast.emit('movePlayer', {
      colorval: data.color,
      xval: data.x,
      yval: data.y
    });
  });

  socket.on('disconnect', reason => {
    socket.broadcast.emit('movePlayer', {
      colorval: clients.indexOf(socket.id) + 1,
      xval: 0,
      yval: 0
    });
    clients[clients.indexOf(socket.id)] = 0;
    logMessage(0, "client disconnected: reason: " + reason + ". clients online: " + clients);
  });

  socket.on('sudo', data => {
    socket.broadcast.emit('sudo', data);
  });

  socket.on('logError', error => {
    logMessage(error.type, error.msg);
  });

  socket.on('say', data => {
    socket.broadcast.emit('say', data);
  });
});

setInterval(() => {
  logMessage(0, "clients connected: " + clients);
}, 60000);
