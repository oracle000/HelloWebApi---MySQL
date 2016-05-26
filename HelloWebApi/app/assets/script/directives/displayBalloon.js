'use strict';

(function () {

    var myUser = angular.module("UserApps");

    myUser.directive('displayBalloon', displayBalloon);

    
    function displayBalloon() {

        var linker = function (scope, element, attrs) {
            scope.userenter = scope.user;
        }

        balloonController.$inject = ['$scope', '$window'];

        function balloonController($scope, $window) {
            $scope.user = $window.prompt("Welcome Please Enter your name: ");
        }

        return {
            controller: balloonController,
            link: linker,
            restrict: 'E',
            replace: true,
            scope: true,            
            templateUrl: 'balloon.html'
        }
    }    
})();