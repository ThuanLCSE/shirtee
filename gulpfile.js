var gulp = require('gulp');
var LiveServer = require('gulp-live-server'); 
var browserify = require('browserify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer'); 
var babelify = require('babelify');  
var isWatching = false;

gulp.on('stop', function() {
   if (!isWatching) {
       process.nextTick(function() {
           process.exit(0);
       });
   }
});

gulp.task('env-set', function() { 
    process.env.NODE_ENV = 'development';
});
gulp.task('live-server', function() {
  var server = new LiveServer('server.js');
  server.start();
});

gulp.task('bundle', function() {
  return browserify({
      entries: 'client/Apps.jsx',
      extensions: ['.jsx'],
      debug: true,
    })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('mainApp.js'))
    .pipe(buffer()) 
    .pipe(gulp.dest('./static'));
});
 
gulp.task('temp', function() {
  gulp.src(['client/index.ejs', 'client/css/**/*.*', 'client/js/**/*.*','client/img/**/*.*'])
    .pipe(gulp.dest('./static'));

  // gulp.src(['app/images/**'])
  //   .pipe(gulp.dest('./static/images'));
});
gulp.task('bundle-n-reload',['bundle','temp'],browserSync.reload);
gulp.task('continous-run', function() {
  isWatching = true; 
  gulp.watch('client/**/**/*.*', ['bundle-n-reload']);

  gulp.watch('client/**/*.*', ['bundle-n-reload']);
  gulp.watch('client/*.*', ['temp']); 
});

gulp.task('server', ['env-set', 'live-server', 'bundle', 'temp','continous-run'], function() {
   browserSync.init(null, { 
    port: 3000,
  });

});
