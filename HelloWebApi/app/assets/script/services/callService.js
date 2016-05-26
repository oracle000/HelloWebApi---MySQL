(function () {
    'use strict';

    var myUser = angular.module("UserApps");

    myUser.service("callService", callService);

    callService.$inject = ['$http'];
    
    function callService($http) {
        var vm = this;

        vm.getUsers = function () {
            return $http.get("https://api.myjson.com/bins/rhjs");
        }
    }
})();