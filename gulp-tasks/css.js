const gulp = require('gulp')
const config = require('./config')
const plumber = require('gulp-plumber')
const autoprefixer = require('gulp-autoprefixer')
const shorthand = require('gulp-shorthand')
const gcmq = require('gulp-group-css-media-queries')

const scss = function() {
  return gulp.src(config.css.src)
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(gcmq())
    .pipe(gulp.dest(config.css.build));
}

module.exports = scss
