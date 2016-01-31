app.directive('listAssignments', function()
{
    return {
        //restrict: 'E',
        scope: {
            assignments: '=',
            assignmenttype: '@'
        },
        templateUrl: 'src/views/templates/listAssignments.html'
   };
});