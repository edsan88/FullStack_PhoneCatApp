//Author:Eduardo Santiago
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
   $http.get('http://localhost:8000/phonelist').success(function(data) {
      $scope.phones = data;
    });

  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {

      $http.get('http://localhost:8000/phonedetail/'+ $routeParams.phoneId).success(function(data) {
      $scope.phone = data;
    });
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {

      $http.get('http://localhost:8000/phonedetail/'+ $routeParams.phoneId ).success(function(data) {
      $scope.phone = data;
      $scope.mainImageUrl = data.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
  
phonecatControllers.controller('PhoneEditDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);



phonecatControllers.controller('PhoneEditDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
      $http.get('http://localhost:8000/phonedetail/'+ $routeParams.phoneId ).success(function(data) {
      $scope.phone = data;
	  $scope.id = data.id;
      $scope.name = data.name;
	  $scope.description = data.description;
	  $scope.mainImageUrl = data.images[0];
	  $scope.availability = data.avail;
	  $scope.battery_type = data.battery.type;
	  $scope.battery_talkTime = data.battery.talkTime;
	  $scope.battery_standbyTime = data.battery.standbyTime;
	  $scope.storage_ram = data.storage.ram;
	  $scope.storage_flash = data.storage.flash;
	  $scope.connectivity_cell = data.connectivity.cell;
	  $scope.connectivity_wifi = data.connectivity.wifi;
	  $scope.connectivity_bluetooth = data.connectivity.bluetooth;
	  $scope.connectivity_infrared = data.connectivity.infrared;
	  $scope.connectivity_gps = data.connectivity.gps;
	  $scope.android_os = data.android.os;
	  $scope.android_ui = data.android.ui;
	  $scope.dimensions = data.sizeAndWeight.dimensions;
	  $scope.weight = data.sizeAndWeight.weight;
	  $scope.screenSize = data.display.screenSize;
	  $scope.screenResolution = data.display.screenResolution;
	  $scope.touchScreen = data.display.touchScreen;
	  $scope.hardware_cpu = data.hardware.cpu;
	  $scope.hardware_usb = data.hardware.usb;
	  $scope.hardware_audioJack = data.hardware.audioJack;
	  $scope.hardware_fmRadio = data.hardware.fmRadio;
	  $scope.hardware_accelerometer = data.hardware.accelerometer;
	  $scope.camera_primary = data.camera.primary;
	  $scope.camera_features = data.camera.features.join(',');
	  $scope.additionalFeatures = data.additionalFeatures;
	});
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
  
//Update 
phonecatControllers.controller('ExampleController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams,$http) {
	$scope.submit = function() {
		if($scope.name == undefined){$scope.name = '';}else{};
		if($scope.description == undefined){$scope.description = '';}else{};
		if($scope.additionalFeatures == undefined){$scope.additionalFeatures = '';}else{};
		if($scope.availability == undefined){$scope.availability = '';}else{};
		if($scope.battery_type == undefined){$scope.battery_type = '';}else{};
		if($scope.battery_talkTime == undefined){$scope.battery_talkTime = '';}else{};
		if($scope.battery_standbyTime == undefined){$scope.battery_standbyTime = '';}else{};
		if($scope.storage_ram == undefined){$scope.storage_ram = '';}else{};
		if($scope.storage_flash == undefined){$scope.storage_flash = '';}else{};
		if($scope.connectivity_cell == undefined){$scope.connectivity_cell = '';}else{};
		if($scope.connectivity_wifi == undefined){$scope.connectivity_wifi = '';}else{};
		if($scope.connectivity_bluetooth == undefined){$scope.connectivity_bluetooth = '';}else{};
		if($scope.connectivity_infrared == undefined){$scope.connectivity_infrared = '';}else{};
		if($scope.connectivity_gps == undefined){$scope.connectivity_gps = '';}else{};
		if($scope.android_os == undefined){$scope.android_os = '';}else{};
		if($scope.android_ui == undefined){$scope.android_ui = '';}else{};
		if($scope.dimensions == undefined){$scope.dimensions = '';}else{};
		if($scope.weight == undefined){$scope.weight = '';}else{};
		if($scope.screenSize == undefined){$scope.screenSize = '';}else{};
		if($scope.screenResolution == undefined){$scope.screenResolution = '';}else{};
		if($scope.touchScreen == undefined){$scope.touchScreen = '';}else{};
		if($scope.hardware_cpu == undefined){$scope.hardware_cpu = '';}else{};
		if($scope.hardware_usb == undefined){$scope.hardware_usb = '';}else{};
		if($scope.hardware_audioJack == undefined){$scope.hardware_audioJack = '';}else{};
		if($scope.hardware_fmRadio == undefined){$scope.hardware_fmRadio = '';}else{};
		if($scope.hardware_accelerometer == undefined){$scope.hardware_accelerometer = '';}else{};
		if($scope.camera_primary == undefined){$scope.camera_primary = '';}else{};
		if($scope.camera_features == undefined){$scope.camera_features = '';}else{};
		var listed = $scope.id+
					'|'+$scope.name+
					'|'+$scope.description+
					'|'+$scope.additionalFeatures+
					'|'+$scope.availability+
					'|'+$scope.battery_type+
					'|'+$scope.battery_talkTime+
					'|'+$scope.battery_standbyTime+
					'|'+$scope.storage_ram+
					'|'+$scope.storage_flash+
					'|'+$scope.connectivity_cell+
					'|'+$scope.connectivity_wifi+
					'|'+$scope.connectivity_bluetooth+
					'|'+$scope.connectivity_infrared+
					'|'+$scope.connectivity_gps+
					'|'+$scope.android_os+
					'|'+$scope.android_ui+
					'|'+$scope.dimensions+
					'|'+$scope.weight+
					'|'+$scope.screenSize+
					'|'+$scope.screenResolution+
					'|'+$scope.touchScreen+
					'|'+$scope.hardware_cpu+
					'|'+$scope.hardware_usb+
					'|'+$scope.hardware_audioJack+
					'|'+$scope.hardware_fmRadio+
					'|'+$scope.hardware_accelerometer+
					'|'+$scope.camera_primary+
					'|'+$scope.camera_features;
		$http.get('http://localhost:8000/phonedetail/update/'+listed).success(function(data) {
			
		  if(data == 200){
			  alert('Success');
		  }else if(data == 500){
			  alert('Error');
		  }

		});
		window.location.href = "#/phones";
		
	};
  }]);