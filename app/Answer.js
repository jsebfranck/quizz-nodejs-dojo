'use strict';

class Answer {
    constructor(login, country, userChoice) {
        this.login = login;
        this.country = country;
        this.userChoice = userChoice;
    }
    getLogin() {
        return this.login;
    }
    getCountry() {
        return this.country;
    }
    getUserChoice() {
        return this.userChoice;
    }
}

module.exports = Answer;
