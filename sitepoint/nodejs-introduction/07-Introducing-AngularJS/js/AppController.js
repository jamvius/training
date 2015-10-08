// Definimos un controlador asociado a un tag HTML a traves del attributo ng-controller
// p.e. <body ng-controller="AppController">
function AppController($scope) {
	$scope.sum = 3 + 2;

	// Definimos una funcion que se puede llamar desde cualquier tag dentro del contexto definido por el controlador 
	$scope.sayHello = function() {
		alert('Hello ' + $scope.username);
	};

	setTimeout(function() {
		// El $apply es necesario para que se refresque 
		$scope.$apply(function() {
			$scope.username = 'Enter your name here';
		});
	}, 2 * 1000);
}