angular.module('emailApp')
.controller('handler1',function($scope,$rootScope,$location){

    $scope.flag = [1, 0, 0];
    $scope.setActiveClass = function(index){
        $scope.flag = [0, 0, 0];
        $scope.flag[index-1] = 1;
        /*console.log($location.path());*/
    }
});