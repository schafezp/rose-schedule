app.controller('HomeworkCtrl', ['$scope', 'ScheduleService','$log', function ($scope, ScheduleService,$log) {
    $scope.schedule = ScheduleService.schedule;
    $scope.className = ScheduleService.schedule.className;
    $scope.homework = ScheduleService.homework;
    $scope.getSessionDate = ScheduleService.getSessionDate;
}])