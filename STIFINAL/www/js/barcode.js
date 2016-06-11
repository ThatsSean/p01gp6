var exampleApp = angular.module('barcode', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

exampleApp.controller("ExampleController", function($scope, $cordovaBarcodeScanner) {
	
	$scope.scanBarcode = function() {
		$cordovaBarcodeScanner.scan().then(function(imageData) {
			alert(imageData.text);
			console.log("format " + imageData.format);
		}, function(error) {
			console.log("an error happened " + error);
		});
	}
});
