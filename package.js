Package.describe({
    name: 'dpankros:timer',
    version: '1.0.0',
    summary: 'Easy to use timers for meteor',
    git: 'https://github.com/dpankros/meteor-timer.git',
    documentation: 'README.md'
  }
);

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use([
      'ecmascript'
    ]);
    api.addFiles([
        'timer.js'
      ], [
        'client',
        'server'
      ]
    );

    api.export([
        'Timer'
      ], [
        'client',
        'server'
      ]
    );
  }
);

//Package.onTest(function(api) {
//  api.use('ecmascript');
//  api.use('tinytest');
//  api.use('dpankros:timer');
//  api.addFiles('timer-tests.js');
//});
