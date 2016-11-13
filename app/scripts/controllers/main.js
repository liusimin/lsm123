'use strict';

/**
 * @ngdoc function
 * @name zuoyeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zuoyeApp
 */
angular.module('zuoyeApp')
   .controller('wyc', function ($scope,$http) {
      $http({
	   	  		method:'get',
	   	  		url:'http://www.somenote.cn:1602/list1'
	   	  	}).success(function(e){
	   	  		$scope.wyc=e;
	   	  	})
  })
  .controller('jgr', function ($scope,$http) {
      $http({
	   	  		method:'get',
	   	  		url:'http://www.somenote.cn:1602/list2'
	   	  	}).success(function(e){
	   	  		$scope.jgr=e;
	   	  	})
  });
