app.controller('ScheduleCtrl', ['$scope', '$sce', '$http', '$location', '$anchorScroll', 'ScheduleService','$log', function ($scope, $sce, $http, $location, $anchorScroll, ScheduleService,$log) {
    /*
     This method allows for html to be injected into an html page to be interpreted as html. This allows for links to be interpreted from raw html.
     Solution found here: http://stackoverflow.com/questions/19415394/with-ng-bind-html-unsafe-removed-how-do-i-inject-html
     */

    $scope.to_trusted = function (html_code) {
        return $sce.trustAsHtml(html_code);
    };
    $scope.gotoID = function (id) {
        $location.hash(id);
        $anchorScroll();
    };

    //$http.get('json/schedule.json').success (function(data){
    //    $scope.scheduleSessions = data.sessions;
    //});

    //ScheduleService.saveSessions();

    $scope.sessions = ScheduleService.sessions;
    $scope.componentNames = ScheduleService.componentNames;
    $scope.className = ScheduleService.className;

    /*Hey, Zach! Here's some differences between Generated schedule (pasted here) and example schedule:
     generated schedule starts like this:
     {"startDate":"2015-11-30T05:00:00.000Z","numberOfSessions":30,"sessions":[stuff below]...
     'sessionNumber' is the renamed 'session' variable.
     All other code (in html) changed to reflect this, because I like it
     */

}]);

