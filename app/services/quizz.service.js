'use strict';

var capitalsService = require('./capitals.service'),
    scoreService = require('./score.service');

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

var shuffle = function (array) {
    var j = 0;
    var temp = null;

    for (var i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

exports.newQuestion = function (cb) {

    capitalsService.getRandomCapitals(function (err, capitals) {
        var cities = capitals.map(function (capital) {
            return capital.city;
        });

        shuffle(cities);

        cb(null, {
            country: capitals[0].country,
            cities: cities
        });
    });
};

exports.getAllScores = function (cb) {
    return scoreService.getAllScores(cb);
};

