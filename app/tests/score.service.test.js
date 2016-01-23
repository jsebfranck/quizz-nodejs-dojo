'use strict';

var scoreService = require('../services/score.service');

describe('score service', function () {
    describe('getAllScores', function () {
        it('', function () {
            scoreService.getAllScores().then(function(score) {
                console.log(score);
            }).done();
        });
    });
});
