var gulp = require('gulp');
var to5 = require('gulp-6to5');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('default', ['clean', 'lint'], function () {
    gulp.src('src/**/*.es6')
        .pipe(sourcemaps.init())
        .pipe(to5({
            modules: 'amd'
        }))
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));

    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(to5())
        .pipe(sourcemaps.write())
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