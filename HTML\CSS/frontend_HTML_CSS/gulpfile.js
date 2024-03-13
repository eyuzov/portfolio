let gulp = require('gulp'),
  less = require('gulp-less'),
  uglify = require('gulp-uglifyes'),
  autoPrefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  bs = require('browser-sync'),
  htmlMin = require('gulp-htmlmin'),
  rename = require('gulp-rename'),
  delFiles = require('del'),
  cssMin = require('gulp-csso'),
  babel = require('gulp-babel'),
  pug = require('gulp-pug'),
  imagemin = require('gulp-imagemin');

const paths = {
  devHtml: 'site/**/*.html',
  devLess: 'site/style/**/*.less',
  devJs: 'site/js/**/*.js',
  devImgs: 'site/images/**/*.*',
  devPug: 'site/pug/**/*.pug',

  project: 'dist',
  projectCss: 'dist/style',
  projectJs: 'dist/js',
  projectImgs: 'dist/images/',
  projectPug: 'dist/templates',
};

gulp.task('html', () => {
  return gulp.src(paths.devHtml) //Выбираем файл с котороыи работаем
    .pipe(htmlMin({collapseWhitespace: true})) //Минификация html
    .pipe(gulp.dest(paths.project)); // Сохранение файла
});

gulp.task('less', () => {
  return gulp.src(paths.devLess)
    .pipe(less())
    .pipe(autoPrefixer())
    .pipe(cssMin())
    .pipe(gulp.dest(paths.projectCss));
});
gulp.task('js:es6', () => {
  return gulp.src(paths.devJs)
    .pipe(gulp.dest(paths.projectJs))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.projectJs));
});
gulp.task('js:babel', () => {
  return gulp.src(paths.devJs)
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(rename({suffix: '.es5'}))
    .pipe(gulp.dest(paths.projectJs))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.projectJs));
});
gulp.task('clean', () => {
  return delFiles(['dist/**'])
});
gulp.task('pug', () => {
  return gulp.src(paths.devPug)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(paths.projectPug))
});
gulp.task('server', () => {
  return bs({
    browser: 'chrome',
    server: {
      baseDir: 'dist'
    }
  })
});
gulp.task('less:watch', () => {
  return gulp.watch(paths.devLess, gulp.series('less', (done) => {
    bs.reload();
    done();
  }));
});
gulp.task('js:watch', () => {
  return gulp.watch(paths.devJs, gulp.series('js:es6', (done) => {
    bs.reload();
    done();
  }));
});
gulp.task('html:watch', () => {
  return gulp.watch(paths.devHtml, gulp.series('html', (done) => {
    bs.reload();
    done();
  }));
});
gulp.task('pug:watch', () => {
  return gulp.watch(paths.devPug, gulp.series('pug', (done) => {
    bs.reload();
    done();
  }));
});

gulp.task('minImgs', () => {
  return gulp.src(paths.devImgs)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.projectImgs))
});


gulp.task('default', gulp.series('clean', 'minImgs', gulp.parallel('html', 'less', 'js:es6', 'js:babel', 'pug', 'less:watch', 'html:watch', 'js:watch', 'pug:watch', 'server')));