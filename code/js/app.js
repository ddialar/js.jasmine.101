var app = angular;

app
  .module('testingAngularApp', [])
  .controller('testingAngularCtrl', testingAngularCtrl);

function testingAngularCtrl($rootScope, $scope) {
  $scope.title = 'Testing Angular with Jasmine';
};
