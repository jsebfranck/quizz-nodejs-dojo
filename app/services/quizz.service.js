'use strict';

var capitalsService = require('./capitals.service'),
    scoreService = require('./score.service'),
    arrayUtil = require('./array.util');

exports.answerQuestion = function (answer, cb) {
    capitalsService.getCapitalByCountry(answer.getCountry(), function (err, expectedCapital) {
        var isCorrect = !err && answer.getUserChoice() === expectedCapital.city;

        scoreService.newAnswer(answer.getLogin(), isCorrect, function (err, score) {
            cb(null, {
                userScore: score,
                isCorrect: isCorrect
            });
        });
    });
};

exports.getCapitals = function (cb) {
    capitalsService.getCapitals(function (err, capitals) {
        cb(null, capitals);
    });
};

exports.getNewQuestion = function (cb) {

    capitalsService.getRandomCapitals(6, function (err, capitals) {
        var cities = capitals.map(function (capital) {
            return capital.city;
        });

        arrayUtil.shuffleArray(cities);

        cb(null, {
            country: capitals[0].country,
            cities: cities
        });
    });
};

exports.getAllScores = function (cb) {
    return scoreService.getAllScores(cb);
};

