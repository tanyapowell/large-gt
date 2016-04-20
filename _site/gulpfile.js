var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['sass']);
