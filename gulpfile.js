var gulp          = require('gulp'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    concat        = require('gulp-concat'),
    sass          = require('gulp-sass'),
    uglify        = require('gulp-uglify'),
    pump          = require('pump'),
    cleanCSS      = require('gulp-clean-css'),
    livereload    = require('gulp-livereload'),
    imagemin      = require('gulp-imagemin');


gulp.task('watch', function(){
  livereload.listen();
  gulp.watch( 'frontend/sass/*.sass', gulp.series('sass'/*, 'css'*/));
  gulp.watch( 'public/*.php').on('change', livereload.changed);
  gulp.watch( 'public/css/*.css').on('change', livereload.changed);
  gulp.watch( 'frontend/js/*.js', gulp.series('js')).on('change', livereload.changed);
});

gulp.task('js', function (cb) {
    pump([
            gulp.src('frontend/js/*.js'),
            uglify(),
            gulp.dest('public/')
        ],
        cb
    );
});

gulp.task('sass', function () {
  return gulp.src( /*['node_modules/bootstrap/scss/bootstrap.scss',*/ 'frontend/sass/style.sass' /*]*/)
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(cleanCSS({ keepBreaks: true, compatibility: 'ie8' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest( 'public/css/'));
});

// gulp.task('css', function(){
//   return gulp.src('frontend/css/*.css')
//     .pipe(sourcemaps.init())
//     .pipe(order([
//         "ion.rangeSlider.css",
//         "ion.rangeSlider.skinFlat.css",
//         "jquery.fancybox.css",
//         "jquery.fancybox-buttons.css",
//         "jquery.fancybox-thumbs.css"
//       ]))
//     .pipe(concat('style.css'))
//     .pipe(cleanCSS({ keepBreaks: true, compatibility: 'ie8' }))
//     .pipe(gulp.dest('public/css/'));
// });

gulp.task(
    'default',
    gulp.parallel(
      'sass',
      'js',
      'watch'
      )
    );
