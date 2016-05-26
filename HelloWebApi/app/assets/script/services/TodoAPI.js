(function() {
    'use strict';

    var myUser = angular.module("UserApps");

    myUser.service("TodoAPI", TodoAPI);
    TodoAPI.$inject = ['$http'];

        
    function TodoAPI($http) {

        var vm = this;

        vm.selectedUser = "";
        vm.selectedId = "";

        vm.GetAllUsers = function () {            
            return $http.get("/api/user/GetAllUsers");
        }

        vm.GetAllUserByName = function(name) {
            return $http.get("/api/user/GetAllUserByName?name=" + name);
        }

        vm.GetAllTaskById = function (id) {
            return $http.get("/api/user/GetTaskById?id=" + id);
        }
        
        vm.GetAllUsersById = function (id) {            
            return $http.get("/api/user/GetAllUsersById?id=" + id);
        };

        vm.PostNewTaskById = function(id) {
            return $http.post("/api/user/PostNewTask?id=" + id);
        }

    }
})();



//Users

//GET GetAllUsers
//GET GetAllUsersById
//POST PostNewUser
//PUT UpdateUser
//DELETE DeleteUser
//Task /Todo

//GET GetAllTaskByUserId
//GET GetTaskById
//POST PostNewTask
//PUT UpdateTask
//DELETE DeleteTask