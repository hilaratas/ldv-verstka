const gulp = require('gulp');
const config = require('./config');

const js = function() {
  return gulp.src(config.jsPlugins.src)
    .pipe(gulp.dest(config.jsPlugins.build))
}

module.exports = js
