// loads various gulp modules
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('dist', ['css', 'font']);

gulp.task('css', function  () {
  gulp.src([
          'bower_components/**/pure/pure.css',
          'bower_components/**/pure/grids-responsive.css',
          'vendor/**/font-awesome/css/font-awesome.css',
          'vendor/**/css/style.css'
        ])
    .pipe(minifyCSS())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('font', function() {
  gulp.src('vendor/font-awesome/fonts/**/*').pipe(gulp.dest('dist/fonts'));
});
