app.controller('HomeworkCtrl', ['$scope', 'ScheduleService','$log', function ($scope, ScheduleService,$log) {
    $scope.schedule = ScheduleService.schedule;
    $scope.homework = ScheduleService.homework;
    //$scope.homeworkkeys = ['Number','Topic','Due','Solution'];
    //$scope.homeworkvalues = ['number','type','sessionDue','solution'];
    //
    //$scope.titles = ScheduleService.get_Keys($scope.homeworknames);



    //$scope.getSessionDate = ScheduleService.getSessionDate;
}])