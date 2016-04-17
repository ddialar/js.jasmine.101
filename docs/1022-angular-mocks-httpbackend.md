[< Home](../README.md)

# Angular Mocks - $httpBackend Service

[$httpBackend Service Official Documentation](https://docs.angularjs.org/api/ngMock/service/$httpBackend)

#### Index

* [Description](#description)
* [The `when` method](#when)
  * [The `when` method syntax](#when-syntax)
* [The `expect` method](#expect)
  * [The `expect` method syntax](#expect-syntax)
* [The `respond` method](#respond)

<a name="description"></a>
## Description

This service provide a fake backend in order to simulate the applications requests to a
virtual server.

This service provides two basic methods: `when` and `expect`.

* `when` is used to define a fake backend request (url, data, header, etc.) which could be or
not could be invoked by some of the unit tests. It doesn't matter if the request is or is not
done because, meanwhile the unit test responds fine, the test will be passed.
* `expect` is used to define a fake backend request (url, data, header, etc.) which must be
invoked by some of the unit tests. If the request is not done, the unit test will be always
failed.

Both methods return a `respond` function which will contain the response bound with the
defined request. So its basic syntax is like that:

```js
$httpBackend
  .when( /* Request parameters */ )
  .respond( /* Request response */ );

$httpBackend
  .expect( /* Request parameters */ )
  .respond( /* Request response */ );
```

Finally, the `respond` content is defined by the user based on the real reply expected from
a real backend.

<a name="when"></a>
## The `when` method

The `when` method provide a set of eight different variant depending on the testing needs.

* `when`
* `whenGET`
* `whenHEAD`
* `whenDELETE`
* `whenPOST`
* `whenPUT`
* `whenJSONP`
* `whenRoute`

The most versatil method is `when`.

<a name="when-syntax"></a>
#### The `when` method syntax

```js
when(method, url, [data], [headers], [keys]);
```
where:
* `method` is a HTTP verb.
* `url` is a string or a RegEx with the URL which will be used for the request.
* `data` is a JSON object which contains the data provided to the request ( `{key: value}` ).
* `headers` JSON object which contains the headers parameters.
* `keys` is an array which contains the keys which will be used in the URL **just
when it is defined as a RegEx**.

<a name="expect"></a>
## The `expect` method

The `expect` method provide a set of eight different variant depending on the testing needs.

* `expect`
* `expectGET`
* `expectHEAD`
* `expectDELETE`
* `expectPOST`
* `expectPUT`
* `expectPATCH`
* `expectJSONP`
* `expectRoute`

The most versatil method is `expect`.

<a name="expect-syntax"></a>
#### The `expect` method syntax

```js
expect(method, url, [data], [headers], [keys]);
```
where:
* `method` is a HTTP verb.
* `url` is a string or a RegEx with the URL which will be used for the request.
* `data` is a JSON object which contains the data provided to the request ( `{key: value}` ).
* `headers` JSON object which contains the headers parameters.
* `keys` is an array which contains the keys which will be used in the URL **just
when it is defined as a RegEx**.


<a name="respond"></a>
## The `respond` method

Every `where` or `expect` method returns a `requestHandler` object which contains a single method
called `respond`.

**The most important part of this method is that, the information provided as attributes will be
the data that will returned by the request method.**

The `respond` method works by two ways.

In the first way, the `respond` method can receive a response code number, a set of data or header
information, in any combination.

The syntax of this first way would be that:

```js
$httpBackend
  .expect( /* Request parameters */ )
  .respond([code,] data[, headers, statusText]);
// On this example it is used the 'expect' method but the syntax is the same for the 'where' one.
```
where:
* `code` is a integer number which represents the [HTTP request response code](http://www.restapitutorial.com/httpstatuscodes.html).
* `data` can be an array, an object or a string which contains the information obtained through the HTTP request.
* `headers` JSON object which contains the headers parameters.
* `statusText` is a string with the massage bound with the response code.

An example of this way could be that:

```js
$httpBackend
  .expect('GET', '/v1/api/current_user')
  // Respond with a 200 status code
  .respond(200);
  // or with a 200 status code and the body "success"
  .respond(200, 'Success');
  // or only return data
  .respond("Fail");
  // or only headers
  .respond({'X-RESPONSE', 'Failure'});
```

In the second way, the `respond` method can receive a *request handler function*
that is executed only for success requests. In this case, instead of returns only
data, we car return a function which could process information and finally, that
function will return an array with the result data.

The syntax of this first way would be that:

```js
$httpBackend
  .expect( /* Request parameters */ )
  .respond(
    function(method, url, data, headers) {
      // Processing the information...
      return [[code,] data[, headers, statusText]];
    }
  );
// On this example it is used the 'expect' method but the syntax is the same for the 'where' one.
```
where:
* `code` is a integer number which represents the [HTTP request response code](http://www.restapitutorial.com/httpstatuscodes.html).
* `data` can be an array, an object or a string which contains the information obtained through the HTTP request.
* `headers` JSON object which contains the headers parameters.
* `statusText` is a string with the massage bound with the response code.

An example of this way could be that:

```js
$httpBackend
  .expectGET("/v1/api/current_user")
  // Respond with a 200 status code and the body "success"
  .respond(
    function(method, url, data, headers) {
      return [200, "DATA", {"header1": "Header1"}];
    }
  );
```
