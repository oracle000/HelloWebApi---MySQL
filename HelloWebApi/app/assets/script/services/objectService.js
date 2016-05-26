// done with strict-di $inject
'use strict';

(function () {

    // inherit from original angular.module
    var myUser = angular.module("UserApps");

    // definition for services
    myUser.service("objectService", objectService);

    // inject the same param of function
    objectService.$inject = [];
    function objectService() {
        var vm = this;
        vm.userProfile = [{
            userID: 1,
            name: 'John Lennon',
            task: [{
                taskID: 1,
                taskname: 'Cleaning the Dishes',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 2,
                taskname: 'Dancing while Eating',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 3,
                taskname: 'Walking the Dog',
                due: 'Wed Apr 13 2016',
                done: true
            }]
        }, {
            userID: 2,
            name: 'Paul Gilbert',
            task: [{
                taskID: 1,
                taskname: 'Eating some Meat',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 2,
                taskname: 'Dancing while Sleeping',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 3,
                taskname: 'Walking the Dog',
                due: 'Wed Apr 13 2016',
                done: true
            }]
        }, {
            userID: 3,
            name: 'Paul McCartney',
            task: [{
                taskID: 1,
                taskname: 'Playing Jumping Rope',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 2,
                taskname: 'Rolling some Balls',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 3,
                taskname: 'Drinking Water',
                due: 'Wed Apr 13 2016',
                done: true
            }]
        }, {
            userID: 4,
            name: 'Richie Kotzen',
            task: [{
                taskID: 1,
                taskname: 'Playing Guitar',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 2,
                taskname: 'Watching Games',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 3,
                taskname: 'Playing Computer Games',
                due: 'Wed Apr 13 2016',
                done: true
            }]
        }, {
            userID: 5,
            name: 'Ringo Starr',
            task: [{
                taskID: 1,
                taskname: 'Typing some Shit',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 2,
                taskname: 'Medication',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 3,
                taskname: 'Running without looking',
                due: 'Wed Apr 13 2016',
                done: true
            }]
        }, {
            userID: 6,
            name: 'John Petrucci',
            task: [{
                taskID: 1,
                taskname: 'Practicing Rope',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 2,
                taskname: 'Cuddling',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 3,
                taskname: 'Printing some Documents',
                due: 'Wed Apr 13 2016',
                done: true
            }]
        }, {
            userID: 7,
            name: 'Yngwie Malmsteen',
            task: [{
                taskID: 1,
                taskname: 'Playing Guitar',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 2,
                taskname: 'Voice Lesson',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 3,
                taskname: 'Drinking Energy Drink',
                due: 'Wed Apr 13 2016',
                done: true
            }]
        }, {
            userID: 8,
            name: 'Michael Romeo',
            task: [{
                taskID: 1,
                taskname: 'Playing Music',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 2,
                taskname: 'Eating Banana',
                due: 'Wed Apr 13 2016',
                done: true
            }, {
                taskID: 3,
                taskname: 'Watering the Plant',
                due: 'Wed Apr 13 2016',
                done: true
            }]
        }]
    }

})();
