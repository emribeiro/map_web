angular.module('componente').
	factory('listarComponentesService', function($http){
//		return $http({
//			method: 'GET',
//			url: '/map_service-1.0.0/rest/componente/lista'
//		});
		
		return {
			listarTodos: function(){
				return $http.get('/map_service-1.0.0/rest/componente/lista');
			}
		};
});