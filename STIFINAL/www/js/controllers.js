angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope, $ionicPopup, $state) {

$scope.showScore = function() {
		$scope.data = {};
		var scorePopup = $ionicPopup.show({
			title: 'Secret Password?',
			template: '<input type="text" ng-model="data.code">',
			scope: $scope,
			buttons: [
			{ text: 'Cancel' },
			{
				text: '<b>Confirm</b>',
				type: 'button-positive',
				onTap: function(e) {
					if ($scope.data.code != "STI6") {
						e.preventDefault();
						} else {
							var after = $ionicPopup.alert({
							title:'Successful'
							});
							$state.go('score');
						}
				}
			}
			]
		});
	}

})
   
.controller('newsfeedCtrl', function($scope) {

})
   
.controller('aboutCtrl', function($scope) {

})
      
.controller('informationCtrl', function($scope, $http) {

	$scope.stories = [];
	
	function loadStories(params, callback) {
		$http.get('https://www.reddit.com/r/cybersecurity/.json', {params: params})
			.success(function(response) {
				var stories = [];
				angular.forEach(response.data.children, function(child) {
					stories.push(child.data);
				});
				callback(stories);
			});
		$scope.openLink = function (url) {
			window.open(url, 'blank');
		}
	}
	
	$scope.loadOlderStories = function() {
		var params = {};
		if ($scope.stories.length > 0) {
			params['after'] = $scope.stories[$scope.stories.length - 1].name;
		}
		loadStories(params, function(olderStories) {
			$scope.stories = $scope.stories.concat(olderStories);
			$scope.$broadcast('scroll.infiniteScrollComplete');
		});
	};
	
	$scope.loadNewerStories = function() {
		var params = {'before': $scope.stories[0].name};
		loadStories(params, function(newerStories) {
			$scope.stories = newerStories.concat($scope.stories);
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

})
   
.controller('quizCtrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz2');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz2Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz3');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz3Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz4');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz4Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz5');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz5Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz6');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz6Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz7');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz7Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz8');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz8Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz9');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }
})
   
.controller('quiz9Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz10');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz10Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz11');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz11Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz12');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz12Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz13');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz13Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz14');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz14Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz15');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz15Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz16');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz16Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz17');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz17Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz18');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz18Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz19');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz19Ctrl', function($scope, $timeout, $state) {
	
	mytimeout = $timeout(function() {
		$state.go('tabsController.quiz20');
	}, 20000);
	
	$scope.stopTimeout = function () {  
        $timeout.cancel(mytimeout);  
    }

})
   
.controller('quiz20Ctrl', function($scope, $ionicPopup, $state) {
	
	$scope.slider = {};
    $scope.slider.rangeValue = 0;
    
    $scope.$watch('slider.rangeValue',function(val,old){
       $scope.slider.rangeValue = parseInt(val);
       console.log('range=' + $scope.slider.rangeValue)
        
    });
    
    $scope.rangeFilter = function(number) {
        return (number.value > $scope.slider.rangeValue);
    }

	$scope.showPopup = function() {
		$scope.data = {};
		var alertPopup = $ionicPopup.show({
			title: 'Info',
			template: '<input type="text" placeholder="Name" ng-model="data.name"><br><input type="text" placeholder="NRIC" ng-model="data.nric">',
			scope: $scope,
			buttons: [
			{ text: 'Cancel' },
			{
				text: '<b>Confirm</b>',
				type: 'button-positive',
				onTap: function(e) {
					if (!$scope.data.name || !$scope.data.nric) {
						e.preventDefault();
						} else {
							var after = $ionicPopup.alert({
							title:'Successful'
							});
							$state.go('tabsController.home');
						}
				}
			}
			]
		});
	}
})
   
.controller('videosCtrl', function($scope) {

})

.controller('scoreCtrl', function($scope) {

})

.controller('shareAStoryCtrl', function($scope) {

})

.controller('surveyCtrl', function($scope) {

})

.controller('survey2Ctrl', function($scope) {

})

.controller('submitvideoCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
