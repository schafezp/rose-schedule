app.controller('HomeworkCtrl', ['$scope', 'ScheduleService', function ($scope, ScheduleService) {
    $scope.className = ScheduleService.className;
    $scope.homework = ScheduleService.homework;
    $scope.getSessionDate = ScheduleService.getSessionDate;
}])