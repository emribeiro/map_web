var app = angular.module('mapWebApp');
var _this = undefined;

var AlterarComponenteCrtl = function($scope, $routeParams, $location, ComponenteService){
	_this = this;
	_this.ComponenteService = ComponenteService;
	_this.$location = $location;
	
	_this.tipos = [
		{label: 'JCL', value: '1'},
		{label: 'Rotina', value: '2'}
	];
	
	_this.tipoSelectionado = {};
	
	ComponenteService.pesquisarPorId($routeParams.componenteId)
		.then(function(success){
			_this.componente = success.data;
			_this.tipoSelectionado = _this.tipos[_this.componente.tipo - 1];
		},
			function(err){
			alert(err.mensagem);
		})
};

AlterarComponenteCrtl.prototype.alterar = function(componente){
	componente.tipo = _this.tipoSelectionado.value;

	_this.ComponenteService.alterar(componente)
		.then(function(success){
			alert(success.data.mensagem);
			_this.$location.path('/');
		}, function(err){
			alert(err.data.mensagem);
		})
		
};

AlterarComponenteCrtl.$inject = ['$scope', '$routeParams' , '$location','ComponenteService'];

app.controller('AlterarComponenteCrtl', AlterarComponenteCrtl);
