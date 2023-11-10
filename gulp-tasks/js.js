const gulp = require('gulp');
const config = require('./config');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const optionsWebpack = require('./optionsWebpack')

const js = function() {
  return gulp.src(config.js.src)
    .pipe(plumber())
    .pipe(babel())
    .pipe(webpack(optionsWebpack))
    .pipe(gulp.dest(config.js.build))
}

module.exports = js
