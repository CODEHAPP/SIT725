const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = 3000;

console.log('Starting server...');

app.use(express.json());
app.use(express.static('public'));

// Test root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Socket.io: Handle client connections
io.on('connection', (socket) => {
  console.log('A user connected: ' + socket.id);

  // Example: Receive message from client and broadcast
  socket.on('message', (msg) => {
    console.log('Received message: ' + msg);
    io.emit('message', msg); // Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected: ' + socket.id);
  });
});

server.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
