const gulp = require('gulp')
const config = require('./config')
const plumber = require('gulp-plumber')
const svgmin = require('gulp-svgmin')
const svgstore = require('gulp-svgstore')
const rename = require('gulp-rename')
const optionsSvgSprite = require('./optionsSvgSprite')

svgSprite = function () {
  return gulp.src(config.svgSprite.src)
    .pipe(plumber())
    .pipe(svgmin(optionsSvgSprite))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('svg-sprite.svg'))
    .pipe(gulp.dest(config.svgSprite.build))
}

module.exports = svgSprite
