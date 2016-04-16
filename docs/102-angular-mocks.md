[< Home](../README.md)

# Angular Mocks

#### Index

* [Needed previous Installation](#needed-previous-installation)

## Basic description

[Official Documentation](https://docs.angularjs.org/api/ngMock)
[$controler Service](https://docs.angularjs.org/api/ngMock/service/$controller)

Angular Mocks is a bunch of code which injects and mocks AngularJS services into
the testing code.

## Available functions

### module

#### Syntax
```js
module(<name_of_the_module_to_be_injected>);

// Example
module('testingAngularApp');
```

#### Description
This function registers a module configuration code which has been previously defined
into the code to be tested. It collects the configuration information which will
be used when the injector is created by the `inject` function.

### inject

#### Syntax
```js
inject(<functions_to_be_injected>);

// Example
inject('testingAngularApp');
```

#### Description
This function wraps a function into an injectable function.
The inject() creates new instance of $injector per test, which is then used for resolving references.

#### Example

```js
it('should initialize the title in the scope', function() {
  module('testingAngularApp');

  var scope = {},
      ctrl;

  inject(function($controller) {
    ctrl = $controller('testingAngularCtrl', { $scope: scope });
  });

  expect(scope.title).toBeDefined();
  expect(scope.title).toBe('Testing Angular with Jasmine');
});
```

In this example, it has been imported the `testingAngularApp` module.
```js
module('testingAngularApp');
```

After that, it is created two variables:

* `scope` will emulate the `$scope` service.
* `ctrl` will reference the controller which we want to test.

```js
var scope = {},
    ctrl;
```

Finally, with the `inject` function, we create an inner functions which uses the
Angular Mocks `$controller` service which is used in order to import controllers.

```js
inject(function($controller) {
  // ...
});
```

Once into the `inject` function, we assign the injected controller to the `ctrl`
variable, providing to the `$controller` service, the name of the controller that
we want to inject and which must be defined previously and then, we provide a set
of **local** attributes which will be used by the controller.

```js
inject(function($controller) {
  ctrl = $controller('testingAngularCtrl', { $scope: scope });
});
```

In this case, we have used `{ $scope: scope }` as local reference. It means that,
for the controller `$scope`, we are going to use the local variable `scope` which
was defined under the `module` function.

After that, we are able to access to the scope of the injected controller in order
to do some test.

```js
expect(scope.title).toBeDefined();
expect(scope.title).toBe('Testing Angular with Jasmine');
```

In this case, the first `expect` instance is going to test if the `title` variable declared
into the controller scope is defined.

Meanwhile, the second `expect` instance will check if the content of that variable matches
with the provided string.
