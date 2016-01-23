'use strict';

var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    quizzApiController = require('./app/controllers/quizz.api.controller'),
    quizzViewsController = require('./app/controllers/quizz.views.controller');

var app = express();

// Static ressources
app.use('/static', express.static('public/'));

// Allow to parse request's body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Serve views
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/views');

// Start server

//TODO

// Init controllers
quizzApiController(app);
quizzViewsController(app);
