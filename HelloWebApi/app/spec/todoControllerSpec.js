// reference files for testing

/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/addons/angular.min.js" />
/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/addons/angular-mocks.js" />
/// <reference path="C:\Users\ceniego\Documents\Visual Studio 2013\Projects\updatedWebapp-APICall-less-json\webApp\webApp\assets/script/controller/todoController.js" />



describe("todoModule", function () {
    
    
    // declaration of module
    beforeEach(module('UserApps'));

    describe("todoController", function () {
        
      
    });

    // injecting controller
    beforeEach(inject(function ($controller, $rootscope) {
        $controllerConstructor = $controller;
        scope = $rootscope.$new();
    }));
    
    it("", function () {

    });
});

