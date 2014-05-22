var gulp = require('gulp');
var lr = require('tiny-lr');
var jade = require('gulp-jade');
var wrap = require('gulp-wrap-amd');
var coffee = require('gulp-coffee');
var clint = require('gulp-coffeelint');
var reload = require('gulp-livereload');
var stylus = require('gulp-stylus');
require('coffee-script/register');

var server = lr();

gulp.task('templates', function(){
  gulp.src('./client/templates/**/*.jade')
  .pipe(jade({client:true}))
  .pipe(wrap({
    deps: ['vendor/jade'],
    params: ['jade']
    }))
  .pipe(gulp.dest('./public/templates'))
  .pipe(reload(server));

});

gulp.task('jade', function(){
  gulp.src('./client/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./public'))
  .pipe(reload(server));
});

gulp.task('stylus', function(){
  gulp.src('./client/css/**/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./public/css'))
  .pipe(reload(server));
});

gulp.task('scripts',['lint:coffee'], function(){
  gulp.src('./client/js/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./public/js'))
    .pipe(reload(server));
  gulp.src('./client/js/**/*.js')
    .pipe(gulp.dest('./public/js'));
});

gulp.task('lint:coffee', function(){
  gulp.src('./client/**/*.coffee')
  .pipe(clint())
  .pipe(clint.reporter());
});

gulp.task('copy', function(){
  gulp.src('./client/css/**/*.css')
    .pipe(gulp.dest('./public/css'))
    .pipe(reload(server));
  gulp.src('./client/images/**')
    .pipe(gulp.dest('./public/images'))
    .pipe(reload(server));
  gulp.src('./client/*.html')
    .pipe(gulp.dest('./public'))
    .pipe(reload(server));
  
});

gulp.task('watch', function(){
  server.listen(35729, function (err) {
    if (err) return console.log(err);

    gulp.watch('./client/js/**', ['scripts']);
    gulp.watch('./client/templates/**', ['templates']);
    gulp.watch('./client/*.jade', ['jade']);
    gulp.watch('./client/css/**/*.css', ['copy']);
    gulp.watch('./client/css/**/*.styl', ['stylus']);
  
  });
});

gulp.task('default', ['templates', 'scripts', 'copy', 'watch', 'jade', 'stylus'], function(){
  require('./start');
  
});