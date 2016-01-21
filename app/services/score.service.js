'use strict';

var redis = require('redis');

var client = redis.createClient();


exports.newAnswer = function(login, isCorrect, cb) {

    client.sadd('users', login, function() {
        client.hincrby(login, 'questions', 1, function(err, questionsCount) {

            var returnUserScore = function(err, successCount) {
                var userScore = {
                    questions: questionsCount,
                    answers: successCount
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


exports.getAllScores = function(cb) {

    client.smembers('users', function(err, users) {
        console.log(users);

        cb(null, {
            'jsebfranck': {
                questions: 10,
                answers: 5
            }
        });

    });
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
