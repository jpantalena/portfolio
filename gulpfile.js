var gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    plugins = require('gulp-load-plugins')({
        rename: {
            'gulp-live-server': 'serve'
        }
    });

gulp.task('default', ['clean', 'build-css', 'watch', 'connect']);

gulp.task('server', ['watch', 'serve']);

gulp.task('build-css', function () {
    return gulp.src('./public/assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('./public/build')).on('error', gutil.log);
});

gulp.task('clean', function() {
    gulp.src('./public/build/*')
      .pipe(clean({force: true}));
});

gulp.task('connect', () => {
  connect.server({
    root: './public/',
    port: 8888,
    livereload: true
  });
});

// Default task
gulp.task('watch', function () {
    gulp.watch('./public/assets/sass/*.scss', ['build-css']);
});

// Folder "/" serving at http://localhost:8888
// Should use Livereload (http://livereload.com/extensions/)
gulp.task('serve', function () {
    var server = plugins.serve.static('./public/', 8888);
    server.start();
    gulp.watch(['build/*'], function (file) {
        server.notify.apply(server, [file]);
    });
});
