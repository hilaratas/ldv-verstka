const config = require('./config')
const optionsPug = require('./optionsPug');
const gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  pugp = require('gulp-pug'),
  webpHtml = require('gulp-webp-html'),
  pretty = require('gulp-html-beautify')
const gif = require('gulp-if');
const remove = require('gulp-remove-html');

const pug = function(){
  return gulp.src(config.pug.src)
    .pipe(plumber())
    .pipe(pugp(optionsPug))
    .pipe(webpHtml())
    .pipe(gif(config.isProd, remove()))
    .pipe(pretty())
    .pipe(gulp.dest(config.pug.build));
}

module.exports = pug
