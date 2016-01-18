'use strict';

var express = require('express'),
    swig = require('swig');

var quizz = require('./quizz');

var app = express();

app.use('/static', express.static('public/'))

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    res.render('index');
});


app.get('/revisions', function(req, res) {
    res.render('revisions', { capitals: quizz.getCapitals() });
});

app.get('/template', function(req, res) {
    res.render('template');
});


app.get('/questions', function(req, res) {
    res.json(quizz.getCapitals());
});



app.listen(3001, function() {
    console.log('App started');
});
