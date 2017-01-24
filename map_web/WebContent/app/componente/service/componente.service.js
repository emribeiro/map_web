angular.
	module('componente').
	factory('Servico', function($resource){
	return $resource('/map_service-1.0.0/rest/componente', {}, {
		save: { method: 'POST'}
	});
});