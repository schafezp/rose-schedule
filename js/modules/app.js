var app = angular.module('schedule', ['smart-table', 'ngRoute']);
app.run(['ScheduleService', function (ScheduleService) {
    //Initialize session data for service.
    ScheduleService.saveSessions();
}
]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/schedule', {
            templateUrl: 'views/schedule.html',
            controller: 'ScheduleCtrl'
        })
        .when('/homework', {
            templateUrl: 'views/homework.html',
            controller: 'HomeworkCtrl'
        })
        .when('/homework/:url', {
            templateUrl: 'views/homework-detail.html',
            controller: 'HomeworkDetailCtrl'
        })
        .when('/labs', {
            templateUrl: 'views/labs.html',
            controller: 'LabCtrl'
        })
        .when('/labs/:url', {
            templateUrl: 'views/lab-detail.html',
            controller: 'LabDetailCtrl'
        })
        .otherwise({
            redirectTo: '/home'

        })
})
//angular.module('schedule',['smart-table']);

