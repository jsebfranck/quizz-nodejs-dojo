'use strict';

var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    Answer = require('./app/Answer');

var quizz = require('./app/quizz');

var app = express();

app.use('/static', express.static('public/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Vues

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/revisions', function(req, res) {
    res.render('revisions', { capitals: quizz.getCapitals() });
});

app.get('/template', function(req, res) {
    res.render('template');
});

// API

app.get('/api/questions', function(req, res) {
    res.json(quizz.getCapitals());
});

app.get('/api/quizz/next', function(req, res) {
    res.json(quizz.newQuestion());
});

app.post('/api/quizz/answer', function(req, res) {
    var answer = new Answer(req.body.login, req.body.country, req.body.userChoice);

    console.log(answer);
    var score = quizz.answerQuestion(answer);
    res.json(score);
});

app.listen(3001, function() {
    console.log('App started');
});
