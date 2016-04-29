"use strict";

var gulp = require("gulp");
var uglify = require("gulp-uglify");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var rename = require("gulp-rename");

gulp.task("serve", ["sass"], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("./public/scss/main.scss", ["sass"]);
    gulp.watch("./index.html").on("change", browserSync.reload);
    gulp.watch("./public/js/core.js", ["js-watch"]);
});

gulp.task("sass", function() {
    return gulp.src("./public/scss/main.scss")
        .pipe(autoprefixer())
        .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream());
});

gulp.task("js-watch", ["js"], browserSync.reload);

gulp.task("js", function(){
    return gulp.src("./public/js/core.js")
        .pipe(uglify().on("error", function(e){
            console.log(e);
        }))
        .pipe(rename("./public/js/core.min.js"))
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);
