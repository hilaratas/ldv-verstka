const gulp = require('gulp')
const del = require('del')
const config = require('./config.js')

const clear = function(done){
  return del(config.clean, done)
}

module.exports = clear
