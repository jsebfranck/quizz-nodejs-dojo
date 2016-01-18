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
app.set('views', __dirname + '/views');

quizzController(app);

var server = app.listen(3001, function() {
    console.log('App started');
});

var io = socketIO.listen(server);


io.on('connection', function(socket) {

    console.log('new connection');

    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
