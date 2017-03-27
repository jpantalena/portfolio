var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    plugins = require('gulp-load-plugins')({
        rename: {
            'gulp-live-server': 'serve'
        }
    });

gulp.task('default', ['watch']);

gulp.task('server', ['serve', 'watch']);

gulp.task('build-css', function () {
    return gulp.src('assets/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('build')).on('error', gutil.log);
});

// Default task
gulp.task('watch', function () {
    gulp.watch('assets/less/**/*.scss', ['build-css']);
});

// Folder "/" serving at http://localhost:8888
// Should use Livereload (http://livereload.com/extensions/)
gulp.task('serve', function () {
    var server = plugins.serve.static('/', 8888);
    server.start();
    gulp.watch(['build/*'], function (file) {
        server.notify.apply(server, [file]);
    });
});
