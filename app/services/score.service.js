'use strict';

var score = {};

// Enregistre le score de l'utilisateur
// Puis répond avec le score de l'utilisateur sour la forme :
//   { questions: <nombre de questions déjà répondues>, success: <nombre de questions répondues avec succès>}
exports.newAnswer = function (login, isCorrect, cb) {

    if (!score[login]) {
        score[login] = {
            questions: 0,
            success: 0
        };
    };

    score[login].questions++;

    if (isCorrect) {
        score[login].success++;
    }

    cb(null, score[login]);
};
