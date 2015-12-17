// loads various gulp modules
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('css', function  () {
  gulp.src([
          'bower_components/**/normalize-css/normalize.css',
          'bower_components/**/pure/pure.css',
        ])
    .pipe(minifyCSS())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css'))
})

    