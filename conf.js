var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'output',
  filename: 'protractor-demo-tests-result.html'
});


// An example configuration file.
exports.config = {
  //directConnect: true,

  seleniumAddresss:'http://127.0.0.1:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['transformation_gallery.js'],


   // Setup the report before any tests start
   beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
   },

   // Assign the test reporter to each running instance
   onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
   },

   // Close the report after all tests finish
   afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
   },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {

    // If true, print colors to the terminal.
     showColors: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000,
  }
};
