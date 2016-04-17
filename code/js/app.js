var app = angular;

app
  .module('testingAngularApp', [])
  .controller('testingAngularCtrl', testingAngularCtrl);

function testingAngularCtrl($rootScope, $scope, $http, $timeout) {
  $scope.title = 'Testing Angular with Jasmine';

  $scope.destinations = [];
  $scope.apiKey = '4285a0932fbb436895ea3b99d5e334d8';

  $scope.newDestination = {
    'city': undefined,
    'country': undefined
  };

  $scope.addDestination = function() {
    $scope.destinations.push(
      {
        'city': $scope.newDestination.city,
        'country': $scope.newDestination.country
      }
    );
  };

  $scope.removeDestination = function(index) {
    $scope.destinations.splice(index, 1);
  };

  $scope.getWeather = function(destination) {
    $http
      .get('http://api.openweathermap.org/data/2.5/weather?q=' + destination.city + '&appid=' + $scope.apiKey)
      .then(
        function success(response) {
          if (response.data.weather) {
            destination.weather = {};
            destination.weather.main = response.data.weather[0].main;
            destination.weather.temp = $scope.convertKelvinToCelsius(response.data.main.temp);
          } else {
            $scope.message = 'City not found';
          }
        },
        function error(error) {
          $scope.message = 'Server error';
        }
      )
  };

  $scope.convertKelvinToCelsius = function(temp) {
    return Math.round(temp - 273);
  };

  $scope.messageWatcher = $scope.$watch('message', function() {
    if ($scope.message) {
      $timeout(function() {
        $scope.message = null;
      }, 3000);
    }
  });
};
