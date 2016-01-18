'use strict';

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
}
