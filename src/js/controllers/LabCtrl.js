app.controller('LabCtrl', ['$scope', 'ScheduleService', function ($scope, ScheduleService) {
    $scope.className = ScheduleService.className;
    $scope.labs = ScheduleService.labs;
    $scope.getSessionDate = ScheduleService.getSessionDate;
}])