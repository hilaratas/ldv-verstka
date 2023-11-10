const gulp = require('gulp')
const config = require('./config')
const plumber = require('gulp-plumber')
const fileinclude = require('gulp-file-include')
const pretty = require('gulp-html-beautify')
const gif = require('gulp-if')
const remove = require('gulp-remove-html')


const html = function(){
  return gulp.src(config.html.src)
    .pipe(plumber())
    .pipe(fileinclude())
    .pipe(gif(config.isProd, remove()))
    .pipe(pretty())
    .pipe(gulp.dest(config.html.build));
}

module.exports = html
