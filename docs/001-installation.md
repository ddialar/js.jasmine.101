[< Home](../README.md)

# Installation

#### Index

* [Needed previous Installation](#needed-previous-installation)
* [Preparing the environment](preparing-the-environment)
* [Starting the Karma environment](starting-karma-environment)
* [Running Tests](running-tests)

<a name="needed-previous-installation"></a>
## Needed previous Installation

* NodeJS

<a name="preparing-the-environment"></a>
## Preparing the environment

1. Create a directory where the tests will be done.
2. Initiate the `npm` project.
```sh
$ npm init
# Fill the questions based on your needs.
```
3. Install `Bower` (the package manager for frontend tasks).
```sh
$ npm install bower --save-dev
```
4. Initiate `Bower`.
```sh
$ bower init
```
5. Install `AngularJS`.
```sh
$ bower install angular --save
```
6. Install `Angular Mocks`.
```sh
$ bower install angular-mocks --save
```
7. Install `Karma`.
```sh
$ npm install karma -g
```
8. Install `Karma` CLI.
```sh
$ npm install karma-cli -g
```
9. Install `PhantomJS`.
```sh
$ npm install phantomjs -g
```
10. Install `Jasmine`.
```sh
$ npm install jasmine -g
```

<a name="starting-karma-environment"></a>
## Starting the Karma environment

1. Create a `tests` folder where there will be located the testing codes.
2. Into the `tests` folder, run this command:
```sh
$ karma init
# Which testing framework do you want to use? > jasmine
# Do you want to use Requires.js? > no
# Do you want to capture any browsers automatically? > PhantomJS
# What is the location of your source and test files? > [Keep this question in blank]
# Should any of the files included by the previous patterns be excluded? > [Keep this question in blank]
# Do you want Karma to watch all the files and run the tests on change? > yes
```
3. Edit the `karma.conf.js` file which has been just created and locate the `files` array.
4. Populate the `files` array with the next resources:
```js
files: [
    '../../bower_components/angular/angular.min.js',
    '../../bower_components/angular-mocks/angular-mocks.js',
    '../app.js',
    'unit/*.js'
]
```
5. Once saved the file, check the `Karma` configuration by this command:
```sh
$ karma start karma.conf.js
```

<a name="running-tests"></a>
## Running Tests

1. Into a CLI, go to the root tests folder.
2. Run this command:
```sh
$ karma start <karma_configuration_file_name>
# <karma_configuration_file_name> will be karma.conf.js by default.
```
