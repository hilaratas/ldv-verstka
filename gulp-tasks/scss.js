const gulp = require('gulp')
const config = require('./config')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const shorthand = require('gulp-shorthand')
const gcmq = require('gulp-group-css-media-queries')
const webpcss = require('gulp-webp-css')

const scss = function() {
  return gulp.src(config.scss.src)
    .pipe(plumber())
    .pipe(sass())
    //.pipe(webpcss()) // в этой строчке ошибка
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(gcmq())
    .pipe(rename('style.css'))
    .pipe(gulp.dest(config.scss.build));
}

module.exports = scss
