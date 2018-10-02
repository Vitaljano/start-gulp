const gulp = require('gulp');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');


gulp.task('scss', function(){
	return gulp.src('./src/scss/**/*.scss')
	.pipe(scss())
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
  }))
	.pipe(gulp.dest('src/css/'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function(){
 browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});

gulp.task('watch',['scss','browser-sync'], function(){

	gulp.watch("./src/sass/**/*.scss", ['sass']);
	gulp.watch("./src/js/**/*.js");
	gulp.watch("./src/index.html", browserSync.reload);
});
