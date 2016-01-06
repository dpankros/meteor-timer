Package.describe({
  name: 'dpankros:timer',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Easy to use timers for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dpankros/meteor-timer.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('timer.js');
  api.export('Timer', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('dpankros:timer');
  api.addFiles('timer-tests.js');
});
