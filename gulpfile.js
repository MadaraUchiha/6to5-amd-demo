var gulp = require('gulp');
var to5 = require('gulp-babel');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('default', ['clean', 'lint'], function () {
    //ES6 files
    gulp.src('src/**/*.es6')
        .pipe(sourcemaps.init())
        // 6to5 transpile with AMD module wrapper.
        .pipe(to5({
            modules: 'amd'
        }))
        // Rename to .js
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(sourcemaps.write())
        // Write to /dist
        .pipe(gulp.dest('dist'));

    //JS files
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        // 6to5 transpile without AMD module wrapper
        .pipe(to5())
        .pipe(sourcemaps.write())
        // Write to /dist
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(done) {
    del(['dist/'], done);
});

gulp.task('lint', function() {
    gulp.src('src/**/*.(js/es6)')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'))
});