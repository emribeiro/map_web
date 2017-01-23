angular.
	module('componente').
	component('incluirComponente', {
		templateUrl: 'componente/incluir-componente/template/incluir-componente.template.html',
		controller: function IncluirComponenteController($scope){
			$scope.clean = {};
			
			$scope.limpar = function(){
				$scope.componente = angular.copy($scope.clean);
			};
			
			$scope.salvar = function(componente){
				alert(componente.nome + " incluído!!!!");
			};
		}
	});