// generated on 2015-07-14 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {}
  });
});