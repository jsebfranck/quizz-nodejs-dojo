var chai = require('chai');
var assert = chai.assert;

var capitalService = require('../services/capitals.service');

describe('capitals.service', function() {
    describe('getCapitals', function() {
       it('should return all capitals', function(done) {
           capitalService.getCapitals(function(err, capitals) {
               assert.lengthOf(capitals, 26);
               done();
           });
       });
    });

    describe('getCapitalByCountry', function() {
        it('should return right capital', function(done) {
            capitalService.getCapitalByCountry('France', function(err, capital) {
                assert.equal('Paris', capital.city);
                assert.equal('France', capital.country);
                done();
            });
        });

        it('should return right capital with another country', function(done) {
            capitalService.getCapitalByCountry('Turquie', function(err, capital) {
                assert.equal('Ankara', capital.city);
                assert.equal('Turquie', capital.country);
                done();
            });
        });
    });

    describe('getRandomCapitals', function() {
        it('should return right count of capital', function(done) {
            capitalService.getRandomCapitals(6, function(err, capitals) {
                assert.lengthOf(capitals, 6);
                done();
            });
        });
    });
});
