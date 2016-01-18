
var chai = require('chai');
var assert = chai.assert;
var capitals = require('../app/services/capitals');

describe('capitals', function() {

    describe('getCapitalByCountry', function() {
        it('should return good capital', function() {

            var capital = capitals.getCapitalByCountry('France');

            assert.equal('France', capital.country);
        });

        it('should throw error if unknown', function() {
            assert.throw(function() {
                capitals.getCapitalByCountry('Unkwown');
            });
        });
    });
});
