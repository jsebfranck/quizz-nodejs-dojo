'use strict';

var redis = require('redis'),
    Q = require('q');

var client = redis.createClient();

// Enregistre le score de l'utilisateur
// Puis répond avec le score de l'utilisateur sour la forme :
//   { questions: <nombre de questions déjà répondues>, success: <nombre de questions répondues avec succès>}
exports.newAnswer = function (login, isCorrect, cb) {

    client.sadd('users', login, function () {
        client.hincrby(login, 'questions', 1, function (err, questionsCount) {

            var returnUserScore = function (err, successCount) {
                var userScore = {
                    questions: questionsCount,
                    success: successCount
                };

                cb(null, userScore);
            };


            if (isCorrect) {
                client.hincrby(login, 'success', 1, returnUserScore);
            } else {
                client.hget(login, 'success', returnUserScore);
            }
        });
    });
};

// Renvoie le score de tous les utilisateurs
// Exemple de résultat : { john: {questions:20, success:12 }, tim: {questions:8, success:7}}
exports.getAllScores = function () {

    var deferred = Q.defer();

    var getSetValues = Q.nbind(client.smembers, client);
    var hGetAll = Q.nbind(client.hgetall, client);

    getSetValues('users').then(function (users) {

        var promises = users.map(function (user) {
            return hGetAll(user).then(function (result) {
                return {
                    login: user,
                    result: result
                }
            });
        });

        Q.allSettled(promises).then(function (promisesResult) {

            var allScores = {};

            promisesResult.forEach(function (promisesResult) {
                var login = promisesResult.value.login;
                var userScore = promisesResult.value.result;
                allScores[login] = userScore;
            });

            deferred.resolve(allScores);
        });
    });

    return deferred.promise;
};
