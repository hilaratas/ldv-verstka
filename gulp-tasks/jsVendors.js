const gulp = require('gulp');
const config = require('./config');

const js = function() {
  return gulp.src(config.jsVendors.src)
    .pipe(gulp.dest(config.jsVendors.build))
}

module.exports = js
