angular.
	module('componente').
	component('incluirComponente', {
		templateUrl: 'componente/incluir-componente/template/incluir-componente.template.html',
		controller: ['$scope', 'Servico',  function IncluirComponenteController($scope, Servico){
			$scope.clean = {};
			$scope.message = '';
			
			$scope.limpar = function(){
				$scope.componente = angular.copy($scope.clean);
			};
			
			$scope.salvar = function(componente){
				$scope.componente.inclusao = new Date();
				
				Servico.save(componente, function(response){
					alert(response.status);
				});
				alert($scope.message);
			};
		}]
	});