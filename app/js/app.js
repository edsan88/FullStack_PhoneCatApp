//Author:Eduardo Santiago
var phonecatApp = angular.module('phonecatApp', ['ngRoute','phonecatControllers','phonecatFilters']);
phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
	  when('/phones/update/:phoneId', {
        templateUrl: 'partials/phone-update-detail.html',
        controller: 'PhoneEditDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
