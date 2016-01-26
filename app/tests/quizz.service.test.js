'use strict';

var chai = require('chai'),
    assert = chai.assert;

var quizz = require('../services/quizz.service'),
    Answer = require('../objects/Answer');

describe('quizz', function() {

    describe('getCapitals', function() {
        it('should return all capitals', function(done) {
            quizz.getCapitals(function(err, capitals) {
                assert.equal(26, capitals.length);
                done();
            });
        });
    });

    describe('answerQuestion', function() {
        it('should return score with right answer', function(done) {
            var answer = new Answer('jsebfranck', 'France', 'Paris');

            quizz.answerQuestion(answer, function(err, score) {
                assert.equal(true, score.isCorrect);
                done();
            });
        });

        it('should return score with wrong answer', function(done) {
            var answer = new Answer('jsebfranck', 'France', 'Ankara');

            quizz.answerQuestion(answer, function(err, score) {
                assert.equal(false, score.isCorrect);
                done();
            });
        });
    });

    describe('getNewQuestion', function() {
        it('should generate a new question', function(done) {
            quizz.getNewQuestion(function(err, question) {
                assert.isNotNull(question.country);
                assert.lengthOf(question.cities, 6);
                done();
            });
        });
    });
});
