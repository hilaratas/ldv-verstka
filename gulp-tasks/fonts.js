const gulp = require('gulp')
const config = require('./config')

const fonts = function() {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.build))
}

module.exports = fonts
