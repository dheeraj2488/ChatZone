const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

let chatHistory = [];
let onlineUsers = new Set();

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('new_user', (username) => {
    socket.username = username;
    onlineUsers.add(username);

    io.emit('online_users', Array.from(onlineUsers));
  });


  socket.emit('chat_history', chatHistory);


  socket.on('send_message', (msg) => {
    chatHistory.push(msg);
    io.emit('receive_message', msg);
  });

  socket.on('disconnect', () => {
    onlineUsers.delete(socket.username);
    io.emit('online_users', Array.from(onlineUsers));
  });
});
const port = 7001;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
