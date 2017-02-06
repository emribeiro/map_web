var app = angular.module('mapWebApp',['ngRoute', 'ngResource']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/componente/listar-componente.partial.html',
			controller: 'ListarComponenteCtrl',
			controllerAs: 'lctrl'
		})
})
