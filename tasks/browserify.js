import browserify from 'browserify';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';

/**
 * browserify task
 * @param {string|string[]} globs - anything taken by `browserify`, usually a string or array of strings
 * @param {Object} options
 * @param {Boolean} options.debug
 * @param {Boolean} options.production
 * @param {string} options.filename
 * @param {string} options.dest
 */
export default function task(globs, options) {
    return browserify(globs, {debug: options.debug})
        .bundle()
        .pipe(source(options.filename))
        .pipe(buffer())
        .pipe(gulpif(options.production, uglify()))
        .pipe(gulp.dest(options.dest))
};