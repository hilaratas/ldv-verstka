const imagemin = require('gulp-imagemin');

const pluginsImageMin = [
  imagemin.svgo({
    plugins: [ {collapseGroups: false} ]
  }),
  imagemin.gifsicle(),
  imagemin.mozjpeg(),
  imagemin.optipng(),
];

module.exports = pluginsImageMin
