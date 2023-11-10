const gulp = require('gulp')
const config = require('./config')
const plumber = require('gulp-plumber')

const svgExample = function () {
  return gulp.src(config.svgExample.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.svgExample.build))
}

module.exports = svgExample
