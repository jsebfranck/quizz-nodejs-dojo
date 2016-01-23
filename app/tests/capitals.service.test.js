'use strict';

var chai = require('chai');
var assert = chai.assert;

var capitalService = require('../services/capitals.service');

describe('capitals.service', function() {
    describe('getCapitals', function() {
       it('should return all capitals', function() {
           capitalService.getCapitals(function(err, capitals) {
               assert.lengthOf(capitals, 26);
           });
       });
    });

    describe('getCapitalByCountry', function() {
        it('should return right capital', function() {
            capitalService.getCapitalByCountry('France', function(err, capital) {
                assert.equal('Paris', capital.city);
                assert.equal('France', capital.country);
            });
        });

        it('should return right capital with another country', function() {
            capitalService.getCapitalByCountry('Turquie', function(err, capital) {
                assert.equal('Ankara', capital.city);
                assert.equal('Turquie', capital.country);
            });
        });
    });

    describe('getRandomCapitals', function() {
        it('should return right count of capital', function() {
            capitalService.getRandomCapitals(6, function(err, capitals) {
                assert.lengthOf(capitals, 6);
            });
        });
    });
});
