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
		})
		.when('/componente/:componenteId', {
			templateUrl: 'partials/componente/alterar-componente.partial.html',
			controller: 'AlterarComponenteCrtl',
			controllerAs: 'ctrl'
		})
		;
})
