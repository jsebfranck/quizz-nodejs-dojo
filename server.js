'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public/'))

app.get('/api', function(req, res) {
    res.send('ok');
});

app.listen(3001, function() {
    console.log('App started');
});
