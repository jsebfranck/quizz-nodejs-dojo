
var capitalsService = require('./capitals.service');

exports.answerQuestion = function (answer, cb) {
    capitalsService.getCapitalByCountry(answer.getCountry(), function (err, expectedCapital) {
        var isCorrect = !err && answer.getUserChoice() === expectedCapital.city;

        cb(null, {
            isCorrect: isCorrect
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

        cb(null, {
            country: capitals[0].country,
            cities: cities
        });
    });
};


