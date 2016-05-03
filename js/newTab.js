angular.module("myapp",[]).
controller('maincontroller', ['$scope','$http', '$q', function($scope, $http, $q) {
	$scope.lastOpenedUrls=[];	
	$scope.getUrlFromLocalStorage=function(){
		$scope.lastOpenedUrls = JSON.parse(localStorage.getItem("lastOpenedUrls"));	
	};
	$scope.openAll=function(){
		angular.forEach($scope.lastOpenedUrls,function(url,index){
			chrome.tabs.create({ url: url.url });
		});
	};
	// $scope.changeWallpaper = function(){		
	// 	var currentTime=(new Date()).getTime();
	// 	var random = parseInt(Math.random()*100000);
	// 	$http.get("https://source.unsplash.com/category/nature/1024x768").then(function(data){
	// 		console.log(btoa(data));
	// 	}, function(error) {
	// 		console.log(error.data);
	// 	});
	// 	$('html').css('background',"url(https://source.unsplash.com/category/nature/1920x1080?a="+ currentTime + "a"+ random +") no-repeat center center fixed");
	// };

	$scope.getImageData = function() {
		var url = "https://source.unsplash.com/category/nature/1920x1080";
		var img = new Image();			
	    img.crossOrigin = 'Anonymous';
	    var deferred = $q.defer();
	    img.onload = function(){
	        var canvas = document.createElement('CANVAS');
	        var ctx = canvas.getContext('2d');
	        canvas.height = this.height;
	        canvas.width = this.width;
	        ctx.drawImage(this, 0, 0);
	        dataURL = canvas.toDataURL('jpeg');	        
	        canvas = null; 	    
	        deferred.resolve(dataURL);   
	    };
	    img.src = url;
	    return deferred.promise;
	};

	$scope.setBackgroundImage = function() {
		var lastBackgroundImage = localStorage.getItem('lastBackgroundImage');		
		if(lastBackgroundImage) {
			$('html').css('background',"url("+ lastBackgroundImage +") no-repeat center center fixed");
		}		
		$scope.getImageData().then(function(data){
			if(!lastBackgroundImage)
				$('html').css('background',"url("+ data +") no-repeat center center fixed");			
			localStorage.setItem('lastBackgroundImage', data);			
		});							
	};

	$scope.setBackgroundImage();
	$scope.getUrlFromLocalStorage();
}]);
