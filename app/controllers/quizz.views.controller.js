'use strict';

var Answer = require('../objects/Answer'),
    quizz = require('../services/quizz.service');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/revisions', function (req, res) {
        quizz.getCapitals(function (err, capitals) {
            res.render('revisions', { capitals: capitals });
        });
    });

    app.get('/scores', function (req, res) {
        res.render('scores');
    });
};
