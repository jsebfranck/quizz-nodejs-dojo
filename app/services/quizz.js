'use strict';

var capitals = require('./capitals');

var score = {};

exports.answerQuestion = function(answer) {

    var expectedCapital = capitals.getCapitalByCountry(answer.getCountry());

    console.log('Expected', expectedCapital);

    var isCorrect = answer.getUserChoice() === expectedCapital.city;

    if (!score[answer.getLogin()]) {
      score[answer.getLogin()] = {
          questions: 0,
          answers: 0
      };
    };

    score[answer.getLogin()].questions++;

    if (isCorrect) {
        score[answer.getLogin()].answers++;
    }

    return score;
};

exports.getCapitals = function() {
    return capitals.getCapitals();
};

exports.newQuestion = function () {
    return capitals.getRandomCapital();
};

