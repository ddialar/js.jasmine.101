var app = angular;

app
  .module('testingAngularApp', [])
  .controller('testingAngularCtrl', testingAngularCtrl);

function testingAngularCtrl($rootScope, $scope) {
  $scope.title = 'Testing Angular with Jasmine';

  $scope.destinations = [];

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
};
