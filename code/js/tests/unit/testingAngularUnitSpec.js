describe('Testing Angular JS test suite', function() {

  beforeEach(module('testingAngularApp'));

  describe('Testing AngularJS Controller', function() {
    var scope = {},
        ctrl;

    beforeEach(
      inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('testingAngularCtrl', { $scope: scope });
      })
    );

    it('should initialize the title in the scope', function() {
      expect(scope.title).toBeDefined();
      expect(scope.title).toBe('Testing Angular with Jasmine');
    });

    it('should add 2 destinations to the destinations list', function() {
      expect(scope.destinations).toBeDefined();
      expect(scope.destinations.length).toBe(0);

      scope.newDestination.city = 'London';
      scope.newDestination.country = 'England';

      scope.addDestination();

      scope.newDestination.city = 'Fankfurt';
      scope.newDestination.country = 'Germany';

      scope.addDestination();

      expect(scope.destinations.length).toBe(2);
      expect(scope.destinations[0].city).toBe('London');
      expect(scope.destinations[0].country).toBe('England');
      expect(scope.destinations[1].city).toBe('Fankfurt');
      expect(scope.destinations[1].country).toBe('Germany');
    });

    it('should remove a destination from the destination list', function() {
      scope.destinations = [
        {
          'city': 'Paris',
          'country': 'France'
        },
        {
          'city': 'Warsaw',
          'country': 'Poland'
        }
      ];

      expect(scope.destinations.length).toBe(2);

      scope.removeDestination(0);

      expect(scope.destinations.length).toBe(1);
      expect(scope.destinations[0].city).toBe('Warsaw');
      expect(scope.destinations[0].country).toBe('Poland');
    });


  });
});
