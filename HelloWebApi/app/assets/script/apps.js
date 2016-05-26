// done with strict-di $inject
'use strict';

(function () {

    // declaring angular.module    
    var myUser = angular.module("UserApps", [

        // plugin for calendar picker
        'pikaday',

        // addons for angular.js
        'ngRoute',
        'ngStorage',
        'ngAnimate']);
                         
    // $inject function for config
    myUser.config(functionRoute);
            

    functionRoute.$inject = ['$routeProvider'];
    function functionRoute($routeProvider) {
        $routeProvider
           .when("/todo", {
               templateUrl: "todo.html",
               controller: "todoController as routeController"
           })
           .otherwise({
               redirectTo: "/main"
           })
    }
                       
    
    myUser.config([
        'pikadayConfigProvider', function(pikaday) {
            pikaday.setConfig({
                format: "MM/DD/YYY"
            });
        }
    ]);

    // directive for displaying information
    myUser.directive('displayUser', displayUser);
    function displayUser() {
        return {

        }
    };

}());