app.controller('HomeworkDetailCtrl', ['$scope', '$routeParams', '$sce', '$http', function ($scope, $routeParams, $sce, $http) {

    $scope.url = $routeParams.url;
    //TODO: This should be extracted into some Utilities module

    $scope.pathFromUrl = function (url) {
        return 'src/content/homework/' + url;
    }
    $scope.to_trusted = function (html_code) {
        return $sce.trustAsHtml(html_code);
    };
    $http.get($scope.pathFromUrl($scope.url)).success(function (data) {

        $scope.content = data;
    })

}])