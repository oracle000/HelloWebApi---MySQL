'use strict';

(function () {
    var myUser = angular.module("UserApps");

    myUser.directive('testDirective', testDirective);
    //testDirective.$inject = ['$log', '$scope'];

    testDirective.$inject = ['$log'];
    function testDirective($log) {
        
        // link function
        var linker = function (scope, element, attrs) {            

            //scope.displayHello("Linker");
            scope.checkTotal = 3;

            // jquery call in attrs
            $('.checkVal').css({
                'font-size': '15px',
                'font-weight' : '300'
            });

            // using element
            element.on('load', scope.displayHello("Onload JQUERY under element"));
            $log.warn(scope.checkTotal + " from Linker");
            
        };

        // this is a controller
        directiveController.$inject = ['$scope'];
        function directiveController($scope) {
            
            this.checkTotal = 10;

            $scope.displayHello = function (test) {
                $log.warn("Hello From: " + test);
            }
            
            $log.warn(this.checkTotal + " from Controller");
            $scope.displayHello("Onload from Controller");
        }

        return {
            controller: directiveController,
            link: linker,
            restrict: 'AEC',
            replace: true,            
            scope: { // isolated scope here 
                displayTask : '@messageAttr'
                },
            template: '<p>Task Count : {{ displayTask }}</p>'            
        }            
    }    
})();