angular.
	module('componente').
	component('incluirComponente', {
		templateUrl: 'componente/incluir-componente/template/incluir-componente.template.html',
		controller: ['$scope', 'incluirComponenteService', '$q',  function IncluirComponenteController($scope, incluirComponenteService, $q){
			$scope.clean = {};
			$scope.message = '';
			var deferred = $q.defer();
			
			$scope.limpar = function(){
				$scope.componente = angular.copy($scope.clean);
			};
			
			$scope.salvar = function(componente){
				$scope.componente.inclusao = new Date();
				
				incluirComponenteService.salvar($scope.componente)
					.then(function(response){
							alert(response);
						}, function(err){
							deferred.reject(err);
						})
			};
		}]
	});