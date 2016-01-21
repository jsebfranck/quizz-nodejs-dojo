'use strict';

var service = require('../services/score.service')

describe('Score', function() {
    describe('Get all scores', function() {

        it('Should return all scores', function() {
            service.getAllScores().then(function(score) {
                console.log(score);
            }).done();
        });
    });
});
