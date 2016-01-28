'use strict';

var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    runSequence = require('run-sequence'),
    _ = require('lodash'),
    plugins = gulpLoadPlugins();

gulp.task('nodemon', function () {
    return plugins.nodemon({
        script: 'server.js',
        nodeArgs: ['--debug'],
        ext: 'js,html',
        watch: _.union('views/*.html', 'app/**/*.js', 'server.js')
    });
});

gulp.task('lint', function () {
    var eslint = plugins.eslint;
    return gulp.src(['**/*.js', '!node_modules/**', '!public/lib/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', function (done) {
    runSequence('nodemon', done);
});
