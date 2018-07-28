var socket = io();

socket.on('connect', function() {
    console.log('connected to server');

    socket.emit('createMessage', {
        to: 'jen@example.com',
        text: 'This is my message!'
    });
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log(message);
});