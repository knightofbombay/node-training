const path = require('path');
const express = require('express');
const fs = require('fs');
const socketIO = require('socket.io');
const http = require('http');

const port = process.env.port || 3000
const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');  
    
    socket.emit('newMessage', {
        from: 'Rajesh',
        text: 'This is great!',
        createAt: new Date().toDateString()
    });

    socket.on('createMessage', (message ) => {
        console.log('New email', message)
    })

    socket.on('disconnect', (socket) => {
        console.log('User got disconnected');
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
