'use strict';

var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    runSequence = require('run-sequence'),
    _ = require('lodash'),
    plugins = gulpLoadPlugins();

// Nodemon task
gulp.task('nodemon', function () {
  return plugins.nodemon({
    script: 'server.js',
    nodeArgs: ['--debug'],
    ext: 'js,html',
    watch: _.union('views/*.html', 'app/**/*.js', 'server.js')
  });
});

// Run the project in development mode
gulp.task('default', function(done) {
  runSequence('nodemon', done);
});
