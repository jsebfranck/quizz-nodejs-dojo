
var chai = require('chai');
var assert = chai.assert;
var quizz = require('../app/services/quizz');

describe('quizz', function() {

    describe('answerQuestion', function() {
        it('should return score', function() {

            var answer = {
                login: 'jsebfranck',
                country: 'France',
                userChoice: 'Paris'
            };

            var score = quizz.answerQuestion(answer);
            console.log(score);
        });
    });
});
