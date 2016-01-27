app.directive('studentTableRow', function()
{
    return {
        restrict: 'E',
        scope: {
            session: '=',
            components: '='
        },
    templateUrl: 'src/js/directives/sessionTableRow.html'
  };
});