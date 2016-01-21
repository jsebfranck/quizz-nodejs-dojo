'use strict';

var request = require('request');

/*exports.getCapitals = function(cb) {

 var capitals = require(__dirname + '/../../data/capitals.json');


 cb(null, capitals);
 };*/

exports.getCapitals = function (cb) {

    var options = {
        method: 'GET',
        url: 'http://localhost:4000/capitals',
        json: true,
        timeout: 1000
    };

    request(options, function (err, response, body) {
        if (err) {
            cb(err);
        } else if (response.statusCode !== 200) {
            cb(new Error('timeout'));
        } else {
            cb(null, body);
        }
    });
};

exports.getCapitalByCountry = function (country, cb) {
    exports.getCapitals(function (err, capitals) {
        var foundCapital;

        capitals.forEach(function (capital) {
            if (capital.country === country) {
                foundCapital = capital;
                return;
            }
        });

        if (foundCapital) {
            cb(null, foundCapital);
        } else {
            var error = new Error('Unknown country : ' + country);
            cb(error);
        }
    });
};

exports.getRandomCapitals = function (count, cb) {
    exports.getCapitals(function (err, capitals) {

        var randomCapitals = [];

        for (var i = 0; i < count; i++) {
            var randomCapitalNumber = Math.floor((Math.random() * capitals.length));

            var randomCapital = capitals[randomCapitalNumber];
            randomCapitals.push(randomCapital);
        }

        cb(null, randomCapitals);
    });
};
