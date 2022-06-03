var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');


// paths

var cssSrc = '../CSS/*.scss';
var cssDist = '../dist/CSS/';
var cssDistName = 'style.css';

// css optimizer

gulp.task('styles', function () {
	return gulp.src(cssSrc)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cssnano())
		.pipe(autoprefixer())
		.pipe(concat(cssDistName))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(cssDist))
});

// watch
gulp.task('watch', () => {
	gulp.watch(cssSrc, gulp.series('styles'))
})

// Default
gulp.task('default', function () {
	gulp.watch('../CSS/*.scss', gulp.series('styles', 'watch'));
});


/* a versão js
 var gulp     = require('gulp');
var plumber  = require('gulp-plumber');
var uglify   = require('gulp-uglify');
var concat   = require('gulp-concat');
var rename   = require('gulp-rename');
 
// Source Path
var js_src   = "./src/js/*.js";
 
// Dist Path
var js_dist  = "./js/";
var js_dist_name = "scripts.js";
 
// Minify e Concat Scripts
gulp.task('scripts', function() {
	return gulp.src(js_src)
		.pipe(plumber())
		.pipe(uglify())
		.pipe(concat(js_dist_name))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(js_dist));
});

// Watch
gulp.task('watch', function() {
	gulp.watch([js_src], ['scripts']);
});

// Default
gulp.task('default', ['scripts']);
*/