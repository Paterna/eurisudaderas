var app = angular.module('app', [
	'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
	function ($stateProvider, $urlRouterProvider, $httpProvider) {
		$urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'partials/form.html',
                    controller: 'formCtrl'
                }
            }
        });
		/*
         * Interceptor de respuestas HTTP
         * 
         * Para adaptar las respuestas del servidor al formato definido en la API,
         * descrito en responses/api_error.js y responses/api_ok.js
         */
        var transformResponse = function(response) {
            var serverResponse = response.data;

            if (serverResponse === undefined || serverResponse.code === undefined)
                return response;

            if (serverResponse.code !== 0) {
                throw serverResponse;
            }

            response.data = serverResponse.data;
            return response.data;
        }

        $httpProvider.interceptors.push( function() {
            return { response: transformResponse }
        });
	}
]);

app.controller('formCtrl', ['$scope', '$state', '$http',
	function ($scope, $state, $http) {
		window.$scope = $scope; //Debug

		$scope.tallas = [];
		$scope.colores = [];
		$scope.disenos = [];

		$http.get('/api/form-data')
		.then(function (data) {
			$scope.tallas = data.tallas;
			$scope.colores = data.colores;
			$scope.disenos = data.disenos;
		})
		.catch(function (err) {
			sweetAlert('Error!', err.message, 'error');
		});

        $scope.order = function (nombre, email, diseno, talla, color) {
            $http.post('/api/order', {
                nombre: nombre,
                email: email,
                talla: talla,
                color: color,
                diseno: diseno
            })
            .then(function (order) {
                console.log("Pedido:", order);
                swal({
                    title: '¡Bien!',
                    text: 'Pedido realizado con éxito.',
                    type: 'success',
                    confirmButton: 'Continuar'
                }, function () {
                    $state.go('home');
                });
            })
            .catch();
        }
	}
]);