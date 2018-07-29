var socket = io();

socket.on('connect', function() {
    console.log('connected to server');

    /*
    socket.emit('createMessage', {
        from: 'jen@example.com',
        text: 'This is my message!'
    });
    */
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log(message);
});