// done with strict-di $inject

'use strict';
(function () {

    // connect to module
    var myUser = angular.module("UserApps");
    myUser.service("setupService", setupService);

    setupService.$inject = ['objectService'];
    
    function setupService(objectService) {
        var vm = this;
        vm.accountInfo = {};
        vm.accountInfo = objectService.userProfile;

        vm.getName = "";

        vm.setSelectedName = function (chooseName) {
            getName = chooseName;
        }
        vm.getSelectedName = function () {
            //return getName;
        }
    };
})();

    
