app.directive('listAssignments', ['ScheduleService',function(ScheduleService)
{
    return {
        //restrict: 'E',
        scope: {
            assignments: '=',
            assignmenttype: '@'
        },
        templateUrl: 'src/views/listAssignments.html',
        link: function (scope, element, attrs){
            scope.getSessionDate = ScheduleService.getSessionDate;
            //scope.get_Keys = ScheduleService.get_Keys;
            //scope.assignmentType = attrs.$attr;
        }
  };
}]
);