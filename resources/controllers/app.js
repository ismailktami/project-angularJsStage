

var app = angular.module("AppModel", ['ngRoute']);


app.controller("MainController",function($scope,$timeout){
	$scope.loaded=false;
	loading=function(){
			$scope.loaded=true;	
			$(".loader").remove();
			}
    $timeout(loading, 2000);
});

app.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html'		})
		.when('/config/:techno/:offre', {
            templateUrl: 'config.html'
				})
		
		.otherwise({
			redirectTo: '/home'
		});

	
});
