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
            controller: 'MainController'
        })
        .when('/schedule', {
            templateUrl: 'views/schedule.html',
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/home'
        })
})
//angular.module('schedule',['smart-table']);

