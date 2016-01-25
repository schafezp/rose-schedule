var app = angular.module('schedule', ['smart-table', 'ngRoute']);
app.run(['ScheduleService', function (ScheduleService) {
    //Initialize session data for service.
    ScheduleService.saveSessions();
}
]);
app.config(function ($locationProvider){

    // This line changes the relative base from /#/ to / but it breaks routing for some reason
    $locationProvider.html5Mode(true);
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'src/views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/schedule', {
            templateUrl: 'src/views/schedule.html',
            controller: 'ScheduleCtrl'
        })
        .when('/homework', {
            templateUrl: 'src/views/homework.html',
            controller: 'HomeworkCtrl'
        })
        .when('/homework/:url', {
            templateUrl: 'src/views/homework-detail.html',
            controller: 'HomeworkDetailCtrl'
        })
        .when('/lab', {
            templateUrl: 'src/views/lab.html',
            controller: 'LabCtrl'
        })
        .when('/lab/:url', {
            templateUrl: 'src/views/lab-detail.html',
            controller: 'LabDetailCtrl'
        })
        .otherwise({
            redirectTo: '/home'

        })
})
//angular.module('schedule',['smart-table']);

