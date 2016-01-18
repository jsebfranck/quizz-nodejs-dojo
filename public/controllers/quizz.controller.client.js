var quizzApp = angular.module('quizzApp', []);

quizzApp.controller('QuizzController', function ($scope, $http) {

    $scope.login = '';
    $scope.showSuccessMessage = false;
    $scope.showFailedMessage = false;

    var updateQuestion = function($http) {
        $http.get('/api/quizz/next').success(function(data) {
            console.log(data.cities);

            var cities = [];

            data.cities.forEach(function(city) {
                cities.push(city);
            });

            $scope.question = {
                country: data.country,
                cities: cities
            };
        });
    }

    updateQuestion($http);

    $scope.answer = function(userChoice) {

        $scope.showSuccessMessage = false;
        $scope.showFailedMessage = false;

        var answer = {
            userChoice: userChoice,
            country: $scope.question.country,
            login: $scope.login
        };

        $http.post('/api/quizz/answer', answer).success(function(data) {
            console.log(data);

            if (data.isCorrect) {
                $scope.showSuccessMessage = true;
            } else {
                $scope.showFailedMessage = true;
            }

            $scope.score = data.score;

            updateQuestion($http);
        });
    };
});
