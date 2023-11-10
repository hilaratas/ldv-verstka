const gulp = require('gulp')
const config = require('./config')

const svgDesign = function () {
  return gulp.src(config.svgDesign.src)
    .pipe(gulp.dest(config.svgDesign.build))
}

module.exports = svgDesign
