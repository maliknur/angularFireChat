var gulp = require('gulp');
var server = require('gulp-server-livereload');

// run server
gulp.task('start', function() {
	gulp.src('app')
		.pipe(server({
			livereload: true,
			directoryListing: true,
			open: true
		}));
})
