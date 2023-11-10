const isProd = process.argv.includes('--production')
const isDev = !isProd
const distFolder = isDev ? 'build' : 'prod'

const config = {
  isProd,
  isDev,
  clean: distFolder,
  html: {
    src: 'src/*.html',
    build: distFolder,
    watch: ['src/*.html', 'src/html_include/*.html']
  },
  pug: {
    src: 'src/pug/*.pug',
    build: distFolder,
    watch: ['src/pug/*.pug', 'src/pug/**/*.pug']
  },
  scss: {
    src: 'src/scss/style.scss',
    build: `${distFolder}/css/`,
    watch: ['src/scss/*.scss', 'src/scss/**/*.scss']
  },
  css: {
    src: ['src/css/*.css', 'src/css/**/*.css'],
    build: `${distFolder}/css/`,
    watch: ['src/css/*.css', 'src/css/**/*.css']
  },
  js: {
    src: ['src/js/*.js', '!src/js/vendors/*.js'],
    build: `${distFolder}/js/`,
    watch: 'src/js/main.js',
  },
  jsVendors: {
    src: 'src/js/vendors/*.js',
    build: `${distFolder}/js/vendors/`,
    watch: 'src/js/vendors/*.js',
  },
  jsPlugins: {
    src: 'src/js/plugins/*.js',
    build: `${distFolder}/js/plugins/`,
    watch: 'src/js/plugins/*.js',
  },
  svgSprite: {
    src: 'src/media/svg-store/*.svg',
    build: `${distFolder}/media/`,
    watch: 'src/media/svg-store/*.svg',
  },
  svgDesign: {
    src: ['src/media/**/*.svg', '!src/media/svg-store/*.svg'],
    build: `${distFolder}/media/`,
    watch: ['src/media/**/*.svg', '!src/media/svg-store/*.svg']
  },
  svgExample: {
    src: 'src/example/**/*.svg',
    build: `${distFolder}/example/`,
    watch: 'src/example/**/*.svg'
  },
  imgDesign: {
    src: 'src/media/**/*.{png,jpg,gif}',
    build: `${distFolder}/media/`,
    watch: 'src/media/**/*.{png,jpg,gif}'
  },
  imgExample: {
    src: 'src/example/**/*.{png,jpg,gif}',
    build: `${distFolder}/example/`,
    watch: 'src/example/**/*.{png,jpg,gif}'
  },
  fonts: {
    src: 'src/fonts/*.{woff,woff2}',
    build: `${distFolder}/fonts/`,
    watch: 'src/fonts/**/*.*'
  },
  server: {
    baseDir: `${distFolder}`
  }
}

module.exports = config
