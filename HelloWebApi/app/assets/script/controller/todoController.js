'use strict';

(function (app) {
    
    var myUser = angular.module("UserApps");
    myUser.controller("todoController", todoController);

    todoController.$inject = ['$scope', '$localStorage', '$log', 'setupService', '$location','TodoAPI'];
    
    function todoController($scope, $localStorage, $log, setupService, $location, TodoAPI) {
        var vm = this;
        vm.selectedArray = {};
        vm.testArray = {};
        vm.newObj = [];
        vm.userId = "";
        vm.taskCount = "";
        vm.addTask = "";
        vm.addDue = "";
        vm.checkDone = "";
        vm.myDOM = "";
        vm.setDate = true;
        
        // for ng-animate concern
        vm.pageClass = 'page-todo';

        // for getting information localstorage                  
        //vm.selectedArray = $localStorage.selectedUser;
        vm.selectedName = TodoAPI.selectedUser;
        console.log(TodoAPI.selectedUser);
        console.log(vm.selectedName + "xxxx");
        //vm.taskCount = vm.selectedArray.task.length;
        //vm.userId = vm.selectedArray.;
        //vm.newObj = vm.selectedArray.task;

        $log.warn(" task " + vm.newObj);
               
        vm.currentDate = new Date();


        TodoAPI.GetAllUsersById(TodoAPI.selectedId).then(function onUserComplete(response) {
            vm.selectedName = response.data[0].UserName;
        }), function onError(reason) {
            vm.message = "Data could not Fetch!! " + reason;
        };

        TodoAPI.GetAllTaskById(TodoAPI.selectedId).then(function onUserComplete(response) {
            vm.newObj = response.data;
        }), function onError(reason) {
            vm.message = "Data could not Fetch!! " + reason;
        };




        // Get all Task Service                     
        vm.saveNewTask = function () {

            TodoAPI.PostNewTask(TodoAPI.selectedId).then(function onUserComplete(response) {
                
                
            }), function onError(reason) {
                vm.message = "Data could not Feth!!" + reason;
            };


            //vm.myDOM = angular.element('<button type="button" class="btn btn-primary" data-ng-disabled="myForm.$invalid" data-ng-click="routeController.saveNewTask()">Add</button>');            
            vm.newCount = vm.selectedArray.task.length + 1;
            vm.chooseDate = new Date(vm.addDue);

            //alert(vm.chooseDate);

            if (vm.chooseDate < vm.currentDate) {
                alert("Date Selected is Invalid");
                return;
            }                                 
            
            $log.info("New Task is " + vm.addTask);
            $log.info("New ID is " + vm.newCount);

            vm.newObj.push({ taskID: vm.newCount, taskname: vm.addTask, due: vm.addDue, done: false });

            $log.warn($localStorage.myObj);

            vm.taskCount = vm.selectedArray.task.length;

            $log.warn("Counting " + vm.testArray);
            $log.warn("Counter " + vm.newCount);
        };

        vm.removeTask = function (checkID) {
            $log.warn("task ID is " + checkID);
            for (var i = 0; i < vm.newObj.length ; i++) {

                if (checkID == vm.newObj[i].taskID) {

                    vm.newObj.splice([i], 1);

                    vm.taskCount = vm.taskCount - 1;
                }
            }
        };

        vm.closeTodo = function($event ) {
                               
            var myUrl = "#/main";
            if ($event.which === 27) {
                
                $log.warn("ESC press");
                $location.path(myUrl);
                //$scope.$apply();

            }
        }
    };

        
})(); 


        

        

      



   

   
