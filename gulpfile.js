const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");

function comprimirJavaScript(){
    return gulp.src("./source/scripts/*.js")
            .pipe(uglify())
            .pipe(obfuscate())
            .pipe(gulp.dest("./build/scripts"));
}

function comprimirImagem() {
    return gulp.src("./source/images/*")
            .pipe(imagemin())
            .pipe(gulp.dest("./build/images"));    
}

function compilaSass(){
    return gulp.src("./source/styles/main.scss")
            .pipe(sass())
            .pipe(gulp.dest("./build/styles/"));
}

exports.default = function(){
    gulp.watch("./source/styles/*",{ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch("./source/images/*",{ignoreInitial: false}, gulp.series(comprimirImagem));
    gulp.watch("./source/scripts/*",{ignoreInitial: false}, gulp.series(comprimirJavaScript));
}