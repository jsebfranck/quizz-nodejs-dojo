'use strict';

var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    socketIO = require('socket.io'),
    quizzController = require('./app/controllers/quizz.controller');

var app = express();

app.use('/static', express.static('public/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/views');

var server = app.listen(3001, function () {
    console.log('App available on http://localhost:3001');
});

var io = socketIO.listen(server);

quizzController(app, io);
