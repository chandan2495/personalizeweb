angular.module("myapp",[]).
controller('maincontroller', ['$scope', function($scope){
	$scope.lastOpenedUrls=[];
	$scope.getUrlFromLocalStorage=function(){
		$scope.lastOpenedUrls = JSON.parse(localStorage.getItem("lastOpenedUrls"));	
	};

	$scope.getUrlFromLocalStorage();
}]);