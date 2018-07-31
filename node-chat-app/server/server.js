const path = require('path');
const express = require('express');
const fs = require('fs');
const socketIO = require('socket.io');
const http = require('http');
const {toUpper} = require('lodash');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');
const {Users} = require('./utils/users');

const port = process.env.port || 3000
const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var users = new Users();

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');  
    
    socket.on('join', (params, callback) => {
        if (!isRealString(params.name) || !isRealString(params.room)) {
            return callback("Name and room name are required");
        }

        //check if user already exists in the room
        let userFlag = (users.users.filter((user) => user.name === params.name).length > 0)
        let roomFlag = (users.users.filter((user) => user.room === params.room).length > 0);

        if ((users.users.length) > 0 && userFlag && roomFlag) {
            return callback("User already exists!")
        }

        //store room in uppercase so that a unique room is created
        var room = toUpper(params.room);

        socket.join(room);
        users.removeUser(socket.id);
        users.addUser(socket.id, params.name, room);

        io.to(room).emit('updateUserList', users.getUserList(room));

        // io.emit ->  io.to('The Office Fans").emit
        // socket.broadcast.emit - socket.broadcast.to('The Office Fans").emit
        // socket.emit

        socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
        socket.broadcast.to(room).emit('newMessage', generateMessage('Admin', `${params.name} has joined`))
        callback();
    });

    socket.on('createMessage', (message, callback ) => {
        var user = users.getUser(socket.id);
        if(user && isRealString('message.text')) {
            io.to(user.room).emit('newMessage', generateMessage(user.name, message.text));
        }
        
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        var user = users.getUser(socket.id);
        if (user) {
            io.to(user.room).emit('newLocationMessage', generateLocationMessage(user.name, coords.latitude, coords.longitude));
        };
    });

    socket.on('disconnect', () => {
        var user = users.removeUser(socket.id);
        if(user) {
            io.to(user.room).emit('updateUserList', users.getUserList(user.room));
            io.to(user.room).emit('newMessage', generateMessage('admin', `${user.name} has left the room.`));
        }
    });
});


app.use((req, res, next) => {
    now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
