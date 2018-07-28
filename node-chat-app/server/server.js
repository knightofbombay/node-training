const path = require('path');
const express = require('express');
const fs = require('fs');

const port = process.env.port || 3000
const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));

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

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
