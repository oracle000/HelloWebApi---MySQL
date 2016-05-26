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
/// <reference path="../assets/script/directives/checkLog.js"/>
/// <reference path="../assets/script/plugins/jquery-1.12.3.min.js"/>

(function () {
    'use strict';

    beforeEach(module("UserApps"));

    var elem,
        scope,
        vm = this,
        directiveController;


  
    describe("Directive TESTING", function() {
       
        // test linker
        // test function

        // custom matchers in progress
        describe("checkLogs Directive", function () {

            // custom matchers
            beforeEach(function() {
                jasmine.addMatchers({
                    toHaveClass: function() {
                        return {
                            compare: function(actual, className) {
                                return { pass: $(actual).hasClass(className) }
                            }
                        }
                    }
                });
            });

            beforeEach(inject(function ($rootScope, $compile, $controller) {

                
                elem = angular.element(
                    '<test-directive>' +
                    '</test-directive>');

                scope = $rootScope.$new();
                
                $compile(elem)(scope);
                scope.$digest();

            }));

            it("Checking Class inside the DOM", function () {
                // testing custom matchers in progress 
                //expect('div.user-legend span p:last-child').toHaveClass('checkVal');
            });
        });


        // checkLogs Directive
        describe("Controller inside Directive", function () {

            it("should check if function is called", inject(function ($rootScope, $controller) {

                //scope = $rootScope.$new();
                //vm = elem.controller("testDirective");                


                //spyOn(vm, 'displayHello');

                //vm.displayHello();
                //expect(vm.displayHello).toHaveBeenCalled();

                expect($('div.user-legend > i').hasClass('fa-user')).toBe(false);

            }));                            
            
        });
    });


})();

