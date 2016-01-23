'use strict';

var redis = require('redis');

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
