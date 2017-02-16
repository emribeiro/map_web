var app = angular.module('mapWebApp');

var _this =  undefined;

var ListarComponenteCtrl = function($scope, ComponenteService, $location, $route){
	
	_this = this;
	_this.ComponenteService = ComponenteService;
	_this.$location = $location;
	_this.$route = $route;
	
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

ListarComponenteCtrl.prototype.toAlterar = function(id){
	_this.$location.path('/componente/' + id);
}

ListarComponenteCtrl.prototype.excluir = function(id){
	_this.ComponenteService.excluir(id)
		.then(function(success){
			alert('Componente excluido com sucesso');
			_this.$route.reload();
		}, function(err){
			alert(err.data.mensagem);
		});
}

ListarComponenteCtrl.$inject = ['$scope', 'ComponenteService', '$location', '$route'];

app.controller('ListarComponenteCtrl', ListarComponenteCtrl);