var app = angular.module('mapWebApp');

var _this =  undefined;

var ListarComponenteCtrl = function($scope, ComponenteService, $location){
	
	_this = this;
	_this.ComponenteService = ComponenteService;
	_this.$location = $location;
	
	_this.titulo = 'Listagem de Componentes';
	_this.listar();
};

ListarComponenteCtrl.prototype.listar = function(){

	_this.ComponenteService.listar()
			.then(function(success){
				_this.componentes = success.data;
			}, function(err){
				alert(err.data.mensagem);
			})
};

ListarComponenteCtrl.prototype.toIncluir = function(){
	_this.$location.path('/componente');
};

ListarComponenteCtrl.$inject = ['$scope', 'ComponenteService', '$location'];

app.controller('ListarComponenteCtrl', ListarComponenteCtrl);