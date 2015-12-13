'use strict';

const $           = require('gulp-load-plugins')();
const gulp        = require('gulp');
const sass        = require('gulp-sass'); // fix
const source      = require('vinyl-source-stream');
const buffer      = require('vinyl-buffer');
const watchify    = require('watchify');
const babelify    = require('babelify');
const browserify  = require('browserify');
const browserSync = require('browser-sync');

const jsPaths = {
  dist      : './dist/js',
  entryPoint: './app/js/index.js',
  outputName: 'bundle.js'
};
const cssPaths = {
  css : './dist/css/',
  scss: './app/sass/'
};

gulp.task('default', ['watchify']);

gulp.task('scss', () => {
  return convertScss();
});

gulp.task('js', () => {
  return compile(true);
});

gulp.task('build', ['js', 'scss']);

gulp.task('watchify', () => {
  gulp.watch('./app/sass/**/*.scss', ['scss']);
  compile(true, true);
});

function compile(isUglify, isWatch) {
  const logger        = new bundleLogger(jsPaths.entryPoint, jsPaths.dist);
  const browserifyObj = browserify(jsPaths.entryPoint)
    .transform(babelify, {presets: ['es2015', 'react']});

  // const option = {
  //   entries: [jsPaths.entryPoint],
  //   debug   : true,
  //   // basedir : './',
  //   optional: [
  //     'es7.asyncFunctions',
  //     'runtime'
  //   ],
  //   presets: ['es2015', 'react'],
  //   extensions: ['.js'],
  //   transform: ['babelify'],
  // };

  let bundler = null;

  if (isWatch) {
    browserSync.init(null, {
      server: {
        index  : './app/index.html',
        baseDir: './'
      }
    });

    // option.cache        = {};
    // option.packageCache = {};
    // option.fullPaths    = true;

    bundler = watchify(browserifyObj);
    logger.watch();
  }
  else {
    bundler = browserifyObj;
  }

  const bundle = () => {
    logger.begin();

    const baseBundler = bundler
      .bundle()
      .on('error', handleError)
      .pipe(source(jsPaths.outputName))
      .pipe(buffer())
      .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe($.if(isUglify, $.uglify()))
      .pipe($.sourcemaps.write('.'))
      .on('end', logger.end)
      .pipe(gulp.dest(jsPaths.dist));

    if (isUglify) return baseBundler;
    else return baseBundler.pipe(browserSync.stream());
  };

  bundler.on('update', bundle);
  return bundle();
}

function bundleLogger(src, bundle) {
  const prettyHrtime = require('pretty-hrtime');

  let beginTime;

  this.begin = () => {
    beginTime = process.hrtime();
    $.util.log('Bundling', `${$.util.colors.green(src)}...`);
  };

  this.watch = () => {
    $.util.log('Watching files required by', $.util.colors.yellow( src ));
  };

  this.end = () => {
    const taskTime   = process.hrtime(beginTime);
    const prettyTime = prettyHrtime(taskTime);
    $.util.log('Bundled', $.util.colors.green(bundle), 'in', $.util.colors.magenta(prettyTime));
  };
}

function handleError() {
  const args = Array.prototype.slice.apply(this, arguments);

  $.notify.onError({
    title  : 'Task Error',
    message: '<%= error %>'
  }).apply(this, args);

  this.emit('end');
}

function convertScss() {
  gulp.src(`${cssPaths.scss}**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe($.postcss([
      require('postcss-mixins'),
      require('postcss-simple-vars'),
      require('postcss-nested')
    ]))
    .pipe(gulp.dest(cssPaths.css));
}
