var quizzApp = angular.module('quizzApp', []);

quizzApp.controller('QuizzController', function ($scope, $http) {

    $scope.showSuccessMessage = false;
    $scope.showFailedMessage = false;

    /*$http.get('/api/quizz/next').success(function(data) {
        $scope.question = data;
    });*/

    $scope.question = {
      country: 'France',
        cities: ['toto', 'titi', 'tata']
    };

    $scope.answer = function(userChoice) {
        var answer = {
            userChoice: userChoice,
            country: $scope.question.country,
            login: $scope.login
        };

        console.log(answer);

        $http.post('/api/quizz/answer', answer).success(function(data) {
            console.log(data);

            $scope.showSuccessMessage = true;


            /*$http.get('/api/quizz/next').success(function(data) {
                $scope.question = data;
            });*/
        });
    };
});
