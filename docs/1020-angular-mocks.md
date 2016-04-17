[< Home](../README.md)

# Angular Mocks

[Official Documentation](https://docs.angularjs.org/api/ngMock)

#### Index

* [Basic description](#basic-description)
* [Available functions](#available-functions)
  * [module](#available-functions-module)
    * [Syntax](#available-functions-module-syntax)
    * [Description](#available-functions-module-description)
  * [inject](#available-functions-inject)
    * [Syntax](#available-functions-inject-syntax)
    * [Description](#available-functions-inject-description)
    * [Example](#available-functions-inject-example)

<a name="basic-description"></a>
## Basic description

Angular Mocks is a bunch of code which injects and mocks AngularJS services into
the testing code.

<a name="available-functions"></a>
## Available functions
<a name="available-functions-module"></a>
### module
<a name="available-functions-module-syntax"></a>
#### Syntax
```js
module(<name_of_the_module_to_be_injected>);

// Example
module('testingAngularApp');
```
<a name="available-functions-module-description"></a>
#### Description
This function registers a module configuration code which has been previously defined
into the code to be tested. It collects the configuration information which will
be used when the injector is created by the `inject` function.

<a name="available-functions-inject"></a>
### inject
<a name="available-functions-inject-syntax"></a>
#### Syntax
```js
inject(<functions_to_be_injected>);

// Example
inject(function($scope, $httpBackend) {
  // Testing general variables initialization...
});
```
<a name="available-functions-inject-description"></a>
#### Description
This method receives a function as parameter.

This second functions receives as parameters, the services which we want to inject into our tests.
This way, we can reference the injected services with internal variables defined into the test
scripts.

**NOTE**: In order to inject **our own services** which are bound to the loaded module (see the
[module section](#available-functions-module)), we have to add and underscore ( _ ) at the
beginning and at the end of our server name.

For example, if in our application script we have defined that:

```js
var app = angular
            .module('MyApp', [])
            .service('myService', myService);
```

At the instant of inject our own service by the `inject` method, we have to do that:

```js
var myService;  // Global testing script variable.

inject(function($scope, _myService_) {
  myService = _myService_;
});
```

After that, our own service (`myService` in this case) will be totally accessible from our testing scripts.

<a name="available-functions-inject-example"></a>
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

<a name="available-services"></a>
## Available services

<a name="available-services-controller"></a>
### $controler Service

[$controler Service](https://docs.angularjs.org/api/ngMock/service/$controller)
