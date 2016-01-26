

// Renvoie la liste de toutes les capitales
// Exemple de capitale : { "country": "France", "city": "Paris" }
var getCapitals = function(cb) {
    var capitals = require(__dirname + '/../../data/capitals.json');
    cb(null, capitals);
};

exports.getCapitals = getCapitals;

// Parcours la liste des capitales et renvoie la capitale qui correspond au pays passé en paramètre
exports.getCapitalByCountry = function (country, cb) {
    //TODO
    cb();
};

// Renvoie une liste de capitales aléatoires. La taille attendue de la liste correspond au paramètre "count".
// Pour générer un nombre entier aléatoire on peut utiliser les fonctions Math.random et Math.floor.
exports.getRandomCapitals = function (count, cb) {
    //TODO
    cb();
};
