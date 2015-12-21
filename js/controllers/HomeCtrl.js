/**
 * Created by blue on 12/20/15.
 */
app.controller('HomeCtrl', ['$scope', 'ScheduleService', function ($scope, ScheduleService) {
    $scope.className = ScheduleService.className;
}]);