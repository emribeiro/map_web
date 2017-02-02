angular.
	module('componente').
		component('listarComponente', {
			templateUrl: 'componente/listar-componente/template/listar-componente.template.html',
			controller: ['$scope', 'listarComponentesService', function listarComponentesController($scope, listarComponentesService){
				$scope.componentes = {};

				listarComponentesService.listarTodos()
			  		.then(function(response){
  						$scope.componentes = response.data;
  					    },function(err){
  					    	alert(responses)
  					    })	
				
			}]
		});