'use strict';

var quizzApp = angular.module('quizzApp', []);

quizzApp.controller('QuizzController', function ($scope, $http) {

    $scope.isConnected = false;
    $scope.login = '';
    $scope.showSuccessMessage = false;
    $scope.showFailedMessage = false;

    var updateQuestion = function ($http) {
        $http.get('/api/quizz/next').success(function (data) {
            var cities = [];

            data.cities.forEach(function (city) {
                cities.push(city);
            });

            $scope.question = {
                country: data.country,
                cities: cities
            };
        });
    };

    $scope.initQuizz = function () {
        updateQuestion($http);
    };

    $scope.answer = function (userChoice) {

        $scope.showSuccessMessage = false;
        $scope.showFailedMessage = false;

        var answer = {
            userChoice: userChoice,
            country: $scope.question.country,
            login: $scope.login
        };

        $http.post('/api/quizz/answer', answer).success(function (data) {
            if (data.isCorrect) {
                $scope.showSuccessMessage = true;
            } else {
                $scope.showFailedMessage = true;
            }

            $scope.userScore = data.userScore;

            updateQuestion($http);
        });
    };

    $scope.connectUser = function () {
        $scope.isConnected = true;
    };

    $scope.getAllScores = function () {
        $http.get('/api/quizz/scores').success(function (data) {
            $scope.allScores = data;
        });
    }
});
