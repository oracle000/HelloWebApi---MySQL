/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/addons/angular.min.js" />
/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/addons/angular-mocks.js" />
/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/apps.js" />
/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/addons/ngStorage.js" />
/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/services/callService.js" />
/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/plugins/pikaday-angular.js" />
/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/plugins/pikaday.js" />
/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/addons/angular-route.js" />
/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/addons/angular-animate.min.js" />


(function () {
    'use strict';

    describe('callService SERVICE TESTING', function () {
           

        // SETUP
        //general declaration 
        var callService,
            http,
            httpBackend,
            authRequestHandler,
            url,
            fakeResponse,
            errorMessage;

        // SETUP
        //declaring default value 
        url = "https://api.myjson.com/bins/rhjs";
        fakeResponse = [{ userID: 1 }, { name: "John" }];
        
        // module declaration


        // SETUP
        beforeEach(module('UserApps'));
                
        beforeEach(inject(function ($injector) {            
            callService = $injector.get('callService');
            httpBackend = $injector.get('$httpBackend');
        }));        
        
        // check that module is not empty
        it(" should check that MODULE is not EMPTY ", function () {
            expect(module).not.toBeNull();            
        });

        // check that http get is getting the data
        it("should check getUser " , function () {

            //declaring injectors 
            //$callService = callService;
            //httpBackend = $httpBackend;

            // EXECUTE
            // declaration            
            httpBackend.when('GET', url);
            httpBackend.expectGET(url).respond(fakeResponse);

            //expectation 
            // EXECUTE
            var onUserComplete = function(response) {
                //EXPECT
                expect(response.data).toEqual(fakeResponse);
            };
            // EXECUTE
            var onError = function(reason) {
                // EXPECT
                errorMessage = "Error";
            };

            //calling method 
            // EXECUTE
            callService.getUsers().then(onUserComplete, onError);

            // EXECUTE
            httpBackend.flush();                        
        });

    });
})();
