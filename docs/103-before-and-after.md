[< Home](../README.md)

# Before & After

#### Index

* [Introduction](#basic-description)
* [BeforeEach](#beforeeach)
  * [Description](#beforeeach-description)
  * [Example](#beforeeach-example)
* [AfterEach](#aftereach)
  * [Description](#aftereach-description)
  * [Example](#aftereach-example)
* [BeforeAll](#beforeall)
  * [Description](#beforeall-description)
  * [Example](#beforeall-example)
* [AfterbteAll](#afterall)
  * [Description](#afterall-description)
  * [Example](#afterall-example)

<a name="basic-description"></a>
## Introduction

- [Official Documentation](http://jasmine.github.io/2.4/introduction.html#section-Setup_and_Teardown)

To help a test suite DRY up any duplicated setup and teardown code, Jasmine provides
the global `beforeEach`, `afterEach`, `beforeAll`, and `afterAll` functions.

<a name="beforeeach"></a>
## BeforeEach

<a name="beforeeach-description"></a>
#### Description

As the name implies, the `beforeEach` function is called once **before** each test defined into the
`describe` function in which it is defined.

Here is the same set of specs written a little differently. The variable under test is defined at
the top-level scope (the describe block) and initialization code is moved into a `beforeEach` function.

<a name="beforeeach-example"></a>
#### Example

```js
describe("A spec using beforeEach and afterEach", function() {
  var foo = 0;

  beforeEach(function() {
    foo += 1;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});
```

<a name="aftereach"></a>
## AfterEach

<a name="aftereach-description"></a>
#### Description

As the name implies, the `afterEach` function is called once **after** each test defined into the
`describe` function is run.

The `afterEach` function resets the provided variables before continuing.

<a name="aftereach-example"></a>
#### Example

```js
describe("A spec using beforeEach and afterEach", function() {
  var foo = 0;

  beforeEach(function() {
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});
```

<a name="beforeall"></a>
## BeforeAll

<a name="beforeall-description"></a>
#### Description

The `beforeAll` function is called only once before **all the specs** when the specs defined into
the `describe` are run.

This function can be used to speed up test suites with expensive setup and teardown.

**NOTE**: Be careful using `beforeAll` because, since it is not reset between specs, so it is easy
to accidentally leak state between specs so that they erroneously pass or fail.

<a name="beforeall-example"></a>
#### Example

```js
describe("A spec using beforeAll and afterAll", function() {
  var foo;

  beforeAll(function() {
    foo = 1;
  });

  it("sets the initial value of foo before specs run", function() {
    expect(foo).toEqual(1);
    foo += 1;
  });

  it("does not reset foo between specs", function() {
    expect(foo).toEqual(2);
  });
});
```

<a name="afterall"></a>
## AfterAll

<a name="afterall-description"></a>
#### Description

The `afterAll` function is called after **all specs finish**.

This function can be used to speed up test suites with expensive setup and teardown.

**NOTE**: Be careful using `afterAll` because, since it is not reset between specs, so it is easy
to accidentally leak state between specs so that they erroneously pass or fail.

<a name="afterall-example"></a>
#### Example

```js
describe("A spec using beforeAll and afterAll", function() {
  var foo = 1;

  afterAll(function() {
    foo = 0;
  })

  it("does not reset foo between specs", function() {
    expect(foo).toEqual(2);
  });
});
```
