angular.module("movieMgr", [])
.controller("movieCtr", ["$scope","$http",function($scope, $http){
	$http.get("movies.json").success(function(data){
		$scope.films = data;
	});
	$scope.navCtr = true;
}])

.directive("myDir", function(){
	return{
		restrict: "AE",
		link: function(scope, ele, attr){
			var searchBarHeight = ele.offset().top;
			var timeOut = 0;
			$(window).on("scroll",function(){				
				//console.log($(this).scrollTop()+":"+searchBarHeight+":"+scope.navCtr);
				if(scope.navCtr == true){
					if($(this).scrollTop() > searchBarHeight){
						$(".myNav").animate({top: "0px"}, 1500);
						scope.navCtr = false;
					}
				}else{
					if($(this).scrollTop() < searchBarHeight-100){
						if (timeOut == 0) {
							timeOut = 1;
							$(".myNav").animate({top: "-100px"}, 1500);
						//scope.navCtr = true;
							setTimeout(function(){scope.navCtr = true; scope.$apply(); timeOut = 0;},1500);
						}
					}
				}
				//console.log(scope.navCtr);
				scope.$apply();
			});
		}
	}
});