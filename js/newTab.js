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
	$scope.changeWallpaper = function(){		
		var currentTime=(new Date()).getTime();
		var random = parseInt(Math.random()*100000);
		$('html').css('background',"url(https://source.unsplash.com/category/nature/1920x1080?a="+ currentTime + "a"+ random +") no-repeat center center fixed");
	};

	$scope.getUrlFromLocalStorage();
}]);