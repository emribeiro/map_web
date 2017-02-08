var app = angular.module('mapWebApp');

app.factory('ComponenteService', function($http){
	return {
		salvar: function(componente){
			return $http.post('/map_service-1.0.0/rest/componente', componente);
		},
	
		listar: function(){
			return $http.get('/map_service-1.0.0/rest/componente/lista');
		}
	}
});