angular.module("myapp",[]).
controller('maincontroller', ['$scope', function($scope){
	$scope.lastOpenedUrls=[];
	$scope.getUrlFromLocalStorage=function(){
		$scope.lastOpenedUrls = JSON.parse(localStorage.getItem("lastOpenedUrls"));	
	};
	$scope.openAll=function(){
		angular.forEach($scope.lastOpenedUrls,function(url,index){
			chrome.tabs.create({ url: url.url });
		});
	};

	$scope.getUrlFromLocalStorage();
}]);