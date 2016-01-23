'use strict';

var express = require('express');
var app = express();

var capitals = require('./data/capitals.json');

app.get('/capitals', function(req, res) {
    res.json(capitals);
});

app.listen(4000);
