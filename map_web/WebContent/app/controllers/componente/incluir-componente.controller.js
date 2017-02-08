var app = angular.module('mapWebApp');

var _this = undefined;

var IncluirComponenteCtrl = function($scope, ComponenteService, $location){
	_this = this;
	_this.ComponenteService = ComponenteService;
	_this.$location = $location;
}

IncluirComponenteCtrl.prototype.salvar = function(componente){
	componente.inclusao = new Date();
	
	_this.ComponenteService.salvar(componente)
					.then(
					  function(success){
						alert(success.data.mensagem);
						_this.$location.path('/');
					}, function(err){
						alert(err.data.mensagem);
					});
};

IncluirComponenteCtrl.$inject = ['$scope', 'ComponenteService', '$location'];

app.controller('IncluirComponenteCtrl', IncluirComponenteCtrl);