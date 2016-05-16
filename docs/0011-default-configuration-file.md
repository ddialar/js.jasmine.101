[< Home](../README.md)

# Default Karma Configuration File

```js
// Karma configuration
// Generated on Tue Apr 19 2016 08:41:33 GMT+0100 (WEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../www/lib/angular/angular.min.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      '../www/lib/karma-read-json/karma-read-json.js',
      '../www/services/*.js',
      '../www/components/**/*.js',
      'units/services/*.js',
      {pattern: 'mockdata/**/*.json', included: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../www/services/*.js': ['coverage'],
      '../www/components/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'spec'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    // *** specReporter ***
    // maxLogLines: [int] - limit number of lines logged per test
    // suppressErrorSummary: [true|false] - do not print error summary
    // suppressFailed: [true|false] - do not print information about failed tests
    // suppressPassed: [true|false] - do not print information about passed tests
    // suppressSkipped: [true|false] - do not print information about skipped tests
    // showSpecTiming: [true|false] - print the time elapsed for each spec
    specReporter: {
      maxLogLines: 15,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: true
    },
    // plugins: ['karma-spec-reporter'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
```
