'use strict';

(function () {

    var myUser = angular.module("UserApps");

    myUser.directive('catchError', catchError);
    function catchError() {
        return {
            restrict: 'A',
            template:
                '<span class="error"  >' +
                    '<i class="fa fa-exclamation-circle">' +
                        '<span class="arrow-footer"></span>' +
                    '</i>' +
                    '<p>TaskName is Required!</p>' +
                    '<p ng-show="myForm.input.$error.minlength">TaskName is to Short!</p>' +
                    '<p ng-show="myForm.input.$error.maxlength">TaskName is to Long!</p>' +                        
                '</span>'

        }
    }
}());