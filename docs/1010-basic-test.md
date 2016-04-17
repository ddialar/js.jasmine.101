[< Home](../README.md)

# Basic Tests

#### Index

* [Basic testing elements](#bte)
* [describe block](#bte-describe)
  * [Syntax](#bte-describe-syntax)
  * [Description](#bte-describe-description)
* [it block](#bte-it)
  * [Syntax](#bte-it-syntax)
  * [Description](#bte-it-description)

<a name="bte"></a>
## Basic testing elements

<a name="bte-describe"></a>
### describe block

<a name="bte-describe-syntax"></a>
#### Syntax
```js
describe(<descriptive_text>, <callback_function>);

// Example
describe('Testing AngularJS Test Suit', function() {
  // Set of tests.
});
```

<a name="bte-describe-description"></a>
#### Description
A `describe` block is used in order to sort and manage the different tests which we want
to run.

In addition, a `describe` block is able to contain nested `describe` block if we want
an upper detailed structure. i.e.:
```js
// Main managing block.
describe('Testing AngularJS Test Suit', function() {
  // Nested managing block.
  describe('Testing AngularJS Controller', function() {
    // Set of tests.
  });
});
```

<a name="bte-it"></a>
### it block
<a name="bte-it-syntax"></a>
#### Syntax
```js
it(<descriptive_text>, <callback_function>);

// Example
it('should initialize the title in the scope', function() {
  // Code to be tested.
});
```
<a name="bte-it-description"></a>
#### Description
An `it` block define a single Unit Test.

In addition, a `describe` block is able to contain nested `describe` block if we want
an upper detailed structure. i.e.:
```js
// Main managing block.
describe('Testing AngularJS Test Suit', function() {
  // Nested managing block.
  describe('Testing AngularJS Controller', function() {
    // Set of tests.
  });
});
```
