var app = angular.module('mapWebApp');

var ListarComponenteCtrl = function($scope, $resource){
	var _this =  this;
	
	_this.titulo = 'Listagem de Componentes';
	
	$resource('/map_service-1.0.0/rest/componente/lista').query(function(response){
		_this.componentes = response;
	}, function(err){
		alert(err.mensagem)
	});
	
};

ListarComponenteCtrl.prototype.listar = function(){
	return $resource('/map_service-1.0.0/rest/componente/lista').query(function(response){
		return response;
	}, function(err){
		alert(err.mensagem)
	});
}

ListarComponenteCtrl.$inject = ['$scope', '$resource'];

app.controller('ListarComponenteCtrl', ListarComponenteCtrl);