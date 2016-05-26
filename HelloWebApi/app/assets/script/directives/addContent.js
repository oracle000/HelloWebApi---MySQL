'use strict';

(function () {

    var myUser = angular.module("UserApps");
    
    myUser.directive('addContent', addContent);

    function addContent() {
        return {
            restrict: 'A',
            template: '<h1 class="md30">All User</h1>'
        }
    };    
}());
