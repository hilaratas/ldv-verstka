const config = require('./gulp-tasks/config.js')
const gulp = require('gulp')
const requireDir = require('require-dir')
const tasks = requireDir('./gulp-tasks')
const browserSync = require('browser-sync')
const server = browserSync.create()

gulp.task('clear',  tasks.clear)
gulp.task('html', tasks.html)
gulp.task('pug', tasks.pug)
gulp.task('scss', tasks.scss)
gulp.task('css', tasks.css)
gulp.task('js', tasks.js)
gulp.task('jsVendors', tasks.jsVendors)
gulp.task('jsPlugins', tasks.jsPlugins)
gulp.task('svgSprite', tasks.svgSprite)
gulp.task('svgDesign', tasks.svgDesign)
gulp.task('svgExample', tasks.svgExample)
gulp.task('imgDesign', tasks.imgDesign)
gulp.task('imgExample', tasks.imgExample)
gulp.task('fonts', tasks.fonts)

gulp.task('server', function() {
  server.init({ server: config.server })
});

const reload = function(done) {
  server.reload()
  done()
}

gulp.task('build', gulp.series(
  'clear',
  'pug', 'html',
  'js', 'jsVendors', 'jsPlugins',
  'scss', 'css',
  'svgSprite', 'svgDesign', 'svgExample',
  'imgDesign', 'imgExample',
  'fonts'
  ));

gulp.task('watch', function(){
  gulp.watch(config.pug.watch, gulp.series('pug', reload));
  gulp.watch(config.html.watch, gulp.series('html', reload));
  gulp.watch(config.scss.watch, gulp.series('scss', reload));
  gulp.watch(config.css.watch, gulp.series('css', reload));
  gulp.watch(config.js.watch, gulp.series('js', reload));
  gulp.watch(config.jsVendors.watch, gulp.series('jsVendors', reload));
  gulp.watch(config.jsPlugins.watch, gulp.series('jsPlugins', reload));
  gulp.watch(config.svgSprite.watch, gulp.series('svgSprite', reload));
  gulp.watch(config.svgDesign.watch, gulp.series('svgDesign', reload));
  gulp.watch(config.svgExample.watch, gulp.series('svgExample', reload));
  gulp.watch(config.imgDesign.watch, gulp.series('imgDesign', reload));
  gulp.watch(config.imgExample.watch, gulp.series('imgExample', reload));
  gulp.watch(config.fonts.watch, gulp.series('fonts', reload));
});

gulp.task('dev',
  gulp.series('build', gulp.parallel('server', 'watch'))
);
