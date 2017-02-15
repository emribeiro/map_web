var app = angular.module('mapWebApp');
var _this = undefined;

var AlterarComponenteCrtl = function($scope, $routeParams, ComponenteService){
	_this = this;
	_this.ComponenteService = ComponenteService;
	
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
alert('alterei!!');
};

AlterarComponenteCrtl.$inject = ['$scope', '$routeParams' , 'ComponenteService'];

app.controller('AlterarComponenteCrtl', AlterarComponenteCrtl);
