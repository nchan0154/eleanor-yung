
// Include gulp
var gulp = require('gulp'); 


// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('_js/src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('_scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('_css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('_js/src/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('_js/dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('_js/dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('_js/src/*.js', ['scripts']);
    gulp.watch('_scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);