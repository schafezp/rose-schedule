app.controller('LabDetailCtrl', ['$scope', '$routeParams', '$sce', '$http', function ($scope, $routeParams, $sce, $http) {

    $scope.url = $routeParams.url;
    //TODO: This should be extracted into some Utilities module

    $scope.pathFromUrl = function (url) {
        return '/content/labs/' + url;
    }
    $scope.to_trusted = function (html_code) {
        return $sce.trustAsHtml(html_code);
    };
    $http.get($scope.pathFromUrl($scope.url)).success(function (data) {

        $scope.content = data;
    })

}])