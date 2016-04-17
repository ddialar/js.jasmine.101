[< Home](../README.md)

# Installation

#### Index

* [Needed previous Installation](#needed-previous-installation)
* [Preparing the environment](#preparing-the-environment)
* [Starting the Karma environment](#starting-karma-environment)
* [Running Tests](#running-tests)
* [Setting Up Coverage](#coverage)
* [Reading from JSON mocked files](#json)

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

<a name="coverage"></a>
## Setting Up Coverage

[Karma Coverage Official Documentation](https://karma-runner.github.io/0.8/config/coverage.html)

The `coverage` is a tool which will help us to know how much code is controlled by tests.

In order to work with Karma, there is a package named `karma-coverage` which uses [Istanbul](https://github.com/gotwarlost/istanbul)
(a tool for creating JS coverage reports).

In order to install this coverage tool, we have to follow the next steps:

1. Open a CLI into the project folder, at the same level that the `package.json` file.
2. Run this command:

  ```sh
  $ npm install karma-coverage -g
  ```
3. Locate the `karma.conf.js` file and edit it.
4. Into the `Karma` configuration file, locate the `preprocessors` key and edit its content like that:

  ```js
  preprocessors: {
    '<files_to_be_processed>': 'coverage'
  },
  // <files_to_be_processed> is a relative path to a file o to a folder which contains
  // the bunch of files which will be processed in order to obtain the coverage report.

  // For example:
  preprocessors: {
    '../app.js': 'coverage'
  },
  ```
5. After that, locate the `reporters` key and edit its content like that:

  ```js
  reporters: ['progress', 'coverage'],
  ```
6. Under the `reporters` key, create a new tag named `coverageReporter` with this content:

  ```js
  coverageReporter: {
    type: '<coverage_report_type>',
    dir: '<coverage_report_folder>'
  },
  // <coverage_report_type> is the format used in order to create the reporter. The available values are:
  //    html (default).
  //    lcov (lcov and html).
  //    lcovonly.
  //    text.
  //    text-summary.
  //    cobertura (xml format supported by Jenkins).
  // <coverage_report_folder> is the folder where will be stored the generated reports.

  // For Example:
  coverageReporter: {
    type: 'html',
    dir: 'coverage/'
  },
  ```
7. Stop the `Karma` process (if it was running) and restart it. The coverage report will be created.

<a name="json"></a>
## Reading from JSON mocked files

In order to allow Karma to read from local JSON files which contain mocking data, we have to follow
the next steps:

1. Install the packege `karma-read-json`.

  ```js
  $ bower install karma-read-json
  ```
2. Edit the `karma.conf.js` file.
3. Locate the `files` key and reference the `karma-read-json.js` library.

  ```js
  files: [
    // ...
    '<path_to_bower_libraries>/bower_components/karma-read-json/karma-read-json.js',
    // ...
  ],
  ```
4. Into the same `files` key, reference the JSON files which will be read by `Karma` this way:

  ```js
  files: [
    // ...
    {pattern: '<path_to_json_files>/*.json', included: false},
    // ...
  ],
  ```
5. Restart `Karma`.
6. Into the tests scripts, access to the JSON files using the `readJSON()` function.

  ```js
  var testingData = readJSON('data.json');
  console.log(testingData);
  ```
