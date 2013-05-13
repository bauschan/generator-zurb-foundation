/*global describe:true, beforeEach:true, it:true */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('assert');

describe('Zurb Foundation generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
      if (err) {
        return done(err);
      }
      this.foundation = {};
      this.foundation.app = helpers.createGenerator('zurb-foundation:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      done();
    }.bind(this));

  });

  it('generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.all = require('../app');
  });

  it('should generate dotfiles', function (done) {
    // FIXME: Remove the Gruntfile.js created by the test.before function
    var expected = [
      ['package.json', /"name": "temp"/],
      'app/404.html',
      'app/favicon.ico',
      'app/robots.txt',
      'app/index.html',
      'app/.htaccess',
      '.bowerrc',
      '.gitignore',
      '.gitattributes',
      '.jshintrc',
      '.editorconfig',
      'Gruntfile.js',
      'app/scripts/app.js',
      'app/scripts/main.js',
      'app/scripts/libs/custom.modernizr.js'
      'app/scripts/libs/jquery.js'
      'app/scripts/libs/require.js'
      'app/scripts/libs/zepto.js'
      'app/styles/foundation.css',
      'app/styles/normalize.css'
    ];

    this.foundation.app.options['skip-install'] = true;
    this.foundation.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
