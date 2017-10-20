const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('src/css/*.scss')
		.pipe(sass())
		.on('error', swallowError)
		.pipe(gulp.dest('src/css/'))
});

gulp.task('watch', function () {
	gulp.watch('src/css/*.scss', ['sass'])
});


function swallowError(error) {
	console.log(error.toString());
	this.emit('end')
}