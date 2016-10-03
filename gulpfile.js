var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-csso');

// run server
gulp.task('server', function() {
	gulp.src('app')
		.pipe(server({
			livereload: true,
			port: 7700,
			open: true
		}));
});

// build html
gulp.task('build', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', minifyCss()))
		.pipe(gulp.dest('public'));
});

// compile sass
gulp.task('style', function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers: ['last 15 versions']
		}))
		.pipe(gulp.dest('app/css'));
});

// watch
gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.sass', ['style']);
});

// default task
gulp.task('default', ['server', 'watch']);
