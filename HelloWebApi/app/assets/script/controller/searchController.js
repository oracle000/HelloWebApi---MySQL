// done with strict-di $inject
(function () {
    'use strict';


    // inherit from original angular.module
    var myUser = angular.module("UserApps");    
    myUser.controller("searchController", searchController);
   

    // FOR JSON DATA DECLARATION
    searchController.$inject = ['$log', '$localStorage', 'TodoAPI'];

    function searchController($log, $localStorage, TodoAPI) {

        var vm = this;
        vm.storage = [];
        vm.selectedUser = {};
        vm.name = "";
        
        vm.selectedName = "";
        vm.isRetreivingData = false;

               
        //callService.getUsers().then(onUserComplete, onError);      
        TodoAPI.GetAllUsers().then(function onUserComplete(response) {
            vm.storage = response.data;
            console.log(vm.storage);                     
        }, function onError(reason) {
            vm.message = "Date could not fetch!!";
        });
                      
        vm.addName = function (selectedName) {
            if (selectedName.trim() === "") {
                TodoAPI.GetAllUsers().then(function onUserComplete(response) {
                    vm.storage = response.data;                                                        
                }, function onError(reason) {
                    vm.message = "Date could not fetch!!";
                });
            } else {
                TodoAPI.GetAllUserByName(selectedName).then(function onUserComplete(response) {                    
                    vm.storage = response.data;
                }, function onError(reason) {
                    vm.message = "Date could not fetch!!" + reason;
                });
            }            
        }
        
        vm.getInformation = function (userId) {
            TodoAPI.selectedId = userId;
            //TodoAPI.GetAllUsersById(userId).then(function onUserComplete(response) {

            //    TodoAPI.selectedUser = response.data[0].UserName;
            //    TodoAPI.selectedId = response.data[0].UserId;

            //    console.log(TodoAPI.selectedUser);
            //    console.log(TodoAPI.selectedId);

            //}), function onError(reason) {
            //    vm.message = "Data could not Fetch!! " + reason;
            //}
        }


        // click event saving the name at localstorage
        vm.saveInfo = function(username) {
            vm.selectedName = username;
            //$log.info("Selected User is " + username);

            for (var i = 0; i < $localStorage.myObj.length; i++) {
                if (username === $localStorage.myObj[i].userName) {

                    vm.selectedUser = $localStorage.myObj[i];
                    $localStorage.selectedUser = vm.selectedUser;
                }
            }
        };

        vm.selectUser = function (username) {
            $log.warn("select user " + username);
        };
    };


})();