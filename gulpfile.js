//Gulpfile

var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('build-less', function() {

  gulp.src('./public/less/agency.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(rename('agency.css'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['build-less']);