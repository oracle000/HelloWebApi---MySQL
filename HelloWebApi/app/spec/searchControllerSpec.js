/// <reference path="../assets/script/addons/angular.min.js"/>
/// <reference path="../assets/script/addons/angular-mocks.js"/>
/// <reference path="../assets/script/apps.js"/>
/// <reference path="../assets/script/controller/searchController.js"/>
/// <reference path="../assets/script/services/callService.js"/>
/// <reference path="../assets/script/addons/ngStorage.js"/>
/// <reference path="../assets/script/plugins/pikaday-angular.js"/>
/// <reference path="../assets/script/plugins/pikaday.js"/>
/// <reference path="../assets/script/addons/angular-route.js"/>
/// <reference path="../assets/script/addons/angular-animate.min.js"/>


describe("Search Controller Spec", function () {
    'use strict';

    // undefined global variables
    var searchController,
        scope,
        log,
        localStorage,
        searchCtrlSpec;

    beforeEach(function () {
        module('UserApps');

                           // services only
        inject( function ($rootScope, $log, $localStorage, callService, $controller) {            

            // defining service to variable
            scope = $rootScope.$new();
            log = $log;
            localStorage = $localStorage;

            // defining controller            
            searchCtrlSpec = $controller('searchController', {});
        });              
    });
    



    // check if the function is being called
    it("should check if function SelectUser is called", function () {
        spyOn(searchCtrlSpec, 'selectUser');
        searchCtrlSpec.selectUser();
        expect(searchCtrlSpec.selectUser).toHaveBeenCalled();
    });


     // check if it compare to the localStorage based on parameters
    it("should check if it compare to localStorage", function () {
        // fake Object
        var fakeObj =
        [
            {
                userID: 1,
                userName: 'John Smith'
            }, {
                userID: 2,
                userName: 'John Doe'
            }
        ];

        // initializing the fakeObj in localStorage
        localStorage.$default({ 'myObj': fakeObj });        
    
        // run saveInfo function with parameter and fakeObj in localStorage
        searchCtrlSpec.saveInfo('John Doe');
             
        // check result is equal to John Doe
        expect(searchCtrlSpec.selectedName).toEqual('John Doe');        
    });


    // check if module is present   
    describe("MODULE TESTING", function () {
        var module = angular.module('UserApps');

        it("should check if module is present", function () {
            expect(module).not.toBeNull();
        });

        it("should check if it has four dependency", function () {
            expect(module.requires.length).toBe(4);
        });

        it("should contain pikaday service", function () {
            expect(module.requires).toContain("pikaday");
        });
    });

  
});