'use strict';

var chai = require('chai');
var assert = chai.assert;
var Answer = require('../app/objects/Answer');

describe('Answer', function() {

    it('should return good capital', function() {

        var answer = new Answer('toto', 'titi', 'tata');

        console.log(answer.getCountry(), answer.getLogin(), answer.getUserChoice());
    });
});
