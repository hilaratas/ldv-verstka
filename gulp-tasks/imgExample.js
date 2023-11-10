const gulp = require('gulp')
const config = require('./config')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const webp = require('gulp-webp')
const pluginsImageMin = require('./pluginsImageMin')
const optionsImageMin = require('./optionsImageMin')

const imgExample = function () {
  return gulp.src(config.imgExample.src)
    .pipe(plumber())
    .pipe(newer(config.imgExample.build))
    .pipe(webp())
    .pipe(gulp.dest(config.imgExample.build))
    .pipe(gulp.src(config.imgExample.src))
    .pipe(newer(config.imgExample.build))
    .pipe(imagemin(pluginsImageMin, optionsImageMin))
    .pipe(gulp.dest(config.imgExample.build))
}

module.exports = imgExample
