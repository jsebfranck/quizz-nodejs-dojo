'use strict';

var capitals = require('./capitals.service');

var score = {};

exports.answerQuestion = function(answer) {
    var expectedCapital = capitals.getCapitalByCountry(answer.getCountry());

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

    return {
        score: score,
        isCorrect: isCorrect
    };
};

exports.getCapitals = function() {
    return capitals.getCapitals();
};

exports.newQuestion = function () {

    var capital1 = capitals.getRandomCapital();
    var capital2 = capitals.getRandomCapital();
    var capital3 = capitals.getRandomCapital();
    var capital4 = capitals.getRandomCapital();

    var choices = [capital1.city, capital2.city, capital3.city, capital4.city];
    shuffle(choices);

    return {
        country: capital1.country,
        cities: choices
    };
};

var shuffle = function(array) {
    var i = 0
        , j = 0
        , temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

