angular.
	module('componente').
		factory('incluirComponenteService', function($http){
			return {
				salvar: function(componente){
					return $http.post('/map_service-1.0.0/rest/componente', componente)
				}
			}
		});