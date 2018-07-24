const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    var usersObject = [
        {
            name: 'Rajesh',
            age: 43
        },
        {
            name: 'Michael',
            age: 52
        },
        {
            name: 'Mikey',
            age: 59
        }
    ];

    res.status(200).send(usersObject);
});

app.listen(3000);

module.exports.app = app;

