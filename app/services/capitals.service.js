

// Renvoie la liste de toutes les capitales
// Exemple de capitale : { "country": "France", "city": "Paris" }
var getCapitals = function(cb) {
    var capitals = require(__dirname + '/../../data/capitals.json');
    cb(null, capitals);
};

exports.getCapitals = getCapitals;

// Parcours la liste des capitales et renvoie la capitale qui correspond au pays passé en paramètre
exports.getCapitalByCountry = function (country, cb) {
    getCapitals(function (err, capitals) {
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

// Renvoie une liste de capitales aléatoires. La taille attendue de la liste correspond au paramètre "count".
// Pour générer un nombre entier aléatoire on peut utiliser les fonctions Math.random et Math.floor.
exports.getRandomCapitals = function (count, cb) {
    getCapitals(function (err, capitals) {

        var randomCapitals = [];

        for (var i = 0; i < count; i++) {
            var randomCapitalNumber = Math.floor((Math.random() * capitals.length));

            var randomCapital = capitals[randomCapitalNumber];
            randomCapitals.push(randomCapital);
        }

        cb(null, randomCapitals);
    });
};
