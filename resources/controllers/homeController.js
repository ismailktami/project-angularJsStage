app.controller("homeController",function($scope,$location){

    $scope.techno="FTTH";
    $scope.offre="3P";


    $scope.config=function(){
        localStorage.setItem("techno",$scope.techno);
        localStorage.setItem("offre",$scope.offre);

        $location.path("/config/"+$scope.techno+"/"+$scope.offre);
    }



})