import gulp from 'gulp';
import eslint from 'gulp-eslint';

export default function task(globs) {
    return gulp.src(globs)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
};