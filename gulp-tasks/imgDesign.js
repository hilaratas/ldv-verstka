const gulp = require('gulp')
const config = require('./config')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const webp = require('gulp-webp')
const pluginsImageMin = require('./pluginsImageMin')
const optionsImageMin = require('./optionsImageMin')

const imgDesign = function () {
  return gulp.src(config.imgDesign.src)
    .pipe(plumber())
    .pipe(newer(config.imgExample.build))
    .pipe(webp())
    .pipe(imagemin(pluginsImageMin, optionsImageMin))
    .pipe(gulp.dest(config.imgDesign.build))
}

module.exports = imgDesign
