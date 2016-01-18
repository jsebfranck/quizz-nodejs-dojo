'use strict';

var capitals = require('./capitals');

var score = {};

exports.answerQuestion = function(answer) {

    var expectedCapital = capitals.getCapitalByCountry(answer.country);

    console.log('Expected', expectedCapital);

    var isCorrect = answer.userChoice === expectedCapital.city;

    if (!score[answer.login]) {
      score[answer.login] = {
          questions: 0,
          answers: 0
      };
    };

    score[answer.login].questions++;

    if (isCorrect) {
        score[answer.login].answers++;
    }

    return score;
};

exports.getCapitals = function() {
    return capitals.getCapitals();
};

exports.newQuestion = function () {
    return capitals.getRandomCapital();
};

