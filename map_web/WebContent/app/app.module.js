var app = angular.module('mapWebApp',['ngRoute', 'ngResource']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/componente/listar-componente.partial.html',
			controller: 'ListarComponenteCtrl',
			controllerAs: 'lctrl'
		})
		.when('/componente', {
			templateUrl: 'partials/componente/incluir-componente.partial.html', 
			controller: 'IncluirComponenteCtrl',
			controllerAs: 'ctrl'
		});
})
