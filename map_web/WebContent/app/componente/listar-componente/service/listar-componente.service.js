var comp = angular.module('componente');

comp.factory('ListarComponenteService', function($scope, $http){
	$http.get('/map_service-1.0.0/rest/componente/lista')
		.success(function(data, status, header, config){
			$scope.lista = data;
		})
		.error(function(data, status, header, config){
			$scope.mensagem = "Status: " + status + "- Data: " + data;
		});
});