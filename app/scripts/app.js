'use strict';

/**
 * @ngdoc overview
 * @name zuoyeApp
 * @description
 * # zuoyeApp
 *
 * Main module of the application.
 */
angular
  .module('zuoyeApp', ['ui.router'])
   .config(function($stateProvider,$urlRouterProvider){
  	$stateProvider.state('wyc',{
  		url:'/wyc',
  		templateUrl:'views/wyc.html',
  		controller:'wyc'
  	})
  	.state('jgr',{
  		url:'/jgr',
  		templateUrl:'views/jgr.html',
  		controller:'jgr'
  	})
  	
  })

