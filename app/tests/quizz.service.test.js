'use strict';

var chai = require('chai');

var quizz = require('../services/quizz.service'),
    Answer = require('../objects/Answer');

describe('quizz', function() {

    describe('answerQuestion', function() {
        it('should return score', function() {
            var answer = new Answer('jsebfranck', 'France', 'Paris');

            quizz.answerQuestion(answer, function(err, score) {
                console.log(score);
            });
        });
    });
});
