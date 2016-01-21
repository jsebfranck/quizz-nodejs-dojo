'use strict';

var redis = require('redis'),
    Q = require('Q');

var client = redis.createClient();


exports.newAnswer = function(login, isCorrect, cb) {

    client.sadd('users', login, function() {
        client.hincrby(login, 'questions', 1, function(err, questionsCount) {

            var returnUserScore = function(err, successCount) {
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


exports.getAllScores = function() {

    var deferred = Q.defer();

    var getSetValues = Q.nbind(client.smembers, client);
    var hGetAll = Q.nbind(client.hgetall, client);

    getSetValues('users').then(function(users) {

        var promises = users.map(function(user) {
            return hGetAll(user).then(function(result) {
                return {
                    login: user,
                    result: result
                }
            });
        });

        Q.allSettled(promises).then(function(promisesResult) {

            var allScores = {};

            promisesResult.forEach(function(promisesResult) {
                var login = promisesResult.value.login;
                var userScore = promisesResult.value.result;
                allScores[login] = userScore;
            });

            deferred.resolve(allScores);
        });
    });

    return deferred.promise;
};


/* var score = {};

exports.newAnswer = function(login, isCorrect, cb) {

    if (!score[login]) {
        score[login] = {
            questions: 0,
            answers: 0
        };
    };

    score[login].questions++;

    if (isCorrect) {
        score[login].answers++;
    }

    cb(null, score);
};*/
