

var getCapitals = function(cb) {
    var capitals = require(__dirname + '/../../data/capitals.json');
    cb(null, capitals);
}

exports.getCapitals = getCapitals;

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
