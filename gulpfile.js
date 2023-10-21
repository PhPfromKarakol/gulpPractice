let gulp = require('gulp');
let rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

function css_style(done) {
    gulp.src('./scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true

        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css/'));
}


// function defaultSomeTask(done) {
//     console.log('All is working');
//     done();
// }


// function printHello(done) {
//     console.log('Hello world');
//     done();
// }

function print(done) {
    console.log('HI');
    done();
}

function watchSass() {
    gulp.watch('./scss/**/*', css_style)
}


// gulp.task(css_style);
// gulp.task(print);
gulp.task('default', gulp.series(print, watchSass));


// gulp.task(printHello);
// gulp.task('default', defaultSomeTask);
// exports.default = defaultSomeTask;
// exports.printHello = printHello;


