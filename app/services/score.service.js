'use strict';

var redis = require('redis');

var client = redis.createClient();

exports.newAnswer = function(login, isCorrect, cb) {

    client.hincrby(login, 'questions', 1, function(err, questionsCount) {
        if (isCorrect) {
            client.hincrby(login, 'success', 1, function(err, successCount) {
                var score = {
                    login: {
                        questions: questionsCount,
                        answers: successCount
                    }
                };

                cb(null, score);
            });
        } else {
            client.hget(login, 'success', function(err, successCount) {
                var score = {
                    login: {
                        questions: questionsCount,
                        answers: successCount
                    }
                };

                cb(null, score);
            });
        }
    });
};

/*
 var score = {};

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
