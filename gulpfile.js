var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');


// run server
gulp.task('server', function() {
	gulp.src('app')
		.pipe(server({
			livereload: true,
			port: 7700,
			open: true
		}));
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
