const gulp = require('gulp')
const config = require('./config')
const browserSync = require('browser-sync');
const server = browserSync.create();

const serve = function() {
  server.init({ server: config.server })
}
