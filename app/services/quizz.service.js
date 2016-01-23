
var capitalsService = require('./capitals.service');

// Vérifie que le choix de l'utilisateur est correct
// Exemple de résultat : { isCorrect: <booleanValue> }
exports.answerQuestion = function (answer, cb) {
    capitalsService.getCapitalByCountry(answer.getCountry(), function (err, expectedCapital) {
        var isCorrect = !err && answer.getUserChoice() === expectedCapital.city;

        cb(null, {
            isCorrect: isCorrect
        });
    });
};

// Récupère la liste des capitales à l'aide du service des capitales
exports.getCapitals = function (cb) {
    capitalsService.getCapitals(cb);
};

// Génère une nouvelle Question avec 6 choix possibles de réponse
// Exemple de résultat : { country: 'France', cities: [ 'Paris', 'Berlin', 'Madrid', 'Londres', 'Rome', 'Bruxelles']}
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


