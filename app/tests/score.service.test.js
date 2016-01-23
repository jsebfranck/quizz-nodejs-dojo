'use strict';

var rewire = require('rewire'),
    chai = require('chai'),
    assert = chai.assert;

describe('score service', function() {

    var scoreService;

    beforeEach(function() {
       scoreService = rewire('../services/score.service');
    });

    describe('getCapitals', function() {
        it('should return 1-0 when wrong answer', function(done) {

            scoreService.newAnswer('user1', false, function(err, userScore) {
                assert.isNull(err);
                assert.equal(userScore.questions, 1);
                assert.equal(userScore.success, 0);

                done();
            });
        });

        it('should return 1-1 when success answer', function(done) {
            scoreService.newAnswer('user1', true, function(err, userScore) {
                assert.isNull(err);
                assert.equal(userScore.questions, 1);
                assert.equal(userScore.success, 1);

                done();
            });
        });

        it('should return 2-1 when one wrong answer and one success answer', function(done) {
            scoreService.newAnswer('user1', true, function(err, userScore) {
                scoreService.newAnswer('user1', false, function(err, userScore) {
                    assert.isNull(err);
                    assert.equal(userScore.questions, 2);
                    assert.equal(userScore.success, 1);

                    done();
                });
            });
        });

        it('should return score when several answers fro mseveral users', function(done) {
            scoreService.newAnswer('user1', true, function(err, userScore) {
                scoreService.newAnswer('user2', true, function(err, userScore) {
                    assert.equal(userScore.questions, 1);
                    assert.equal(userScore.success, 1);

                    done();
                });
            });
        });
    });
});
