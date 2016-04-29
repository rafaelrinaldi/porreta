"use strict";

var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("serve", ["sass"], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./public/scss/main.scss", ["sass"]);
    gulp.watch("./index.html").on("change", browserSync.reload);
});

gulp.task("sass", function() {
    return gulp.src("./public/scss/main.scss")
        .pipe(autoprefixer())
        .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
