/// <binding AfterBuild='min' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = [
    paths.webroot + 'js/bootstrap.js',
    paths.webroot + 'js/owl.carousel.min.js',
    paths.webroot + 'js/jquery.stellar.min.js',
    paths.webroot + 'js/wow.min.js',
    paths.webroot + 'js/jquery.mixitup.min.js',
    paths.webroot + 'js/app.js',
    paths.webroot + 'js/jquery.themepunch.tools.min.js',
    paths.webroot + 'js/jquery.themepunch.revolution.js',
    paths.webroot + 'js/rev-custom.js',
]

paths.css = [
    paths.webroot + "css/bootstrap.css",
    paths.webroot + "css/style.css",
    paths.webroot + "css/animate.css",
    paths.webroot + "css/ionicons.css",
    paths.webroot + "css/owl.theme.css",
    paths.webroot + "css/owl.carousel.css",
    paths.webroot + "css/settings.css",
];

paths.minJs = paths.webroot + "js/**/*.min.js";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "lib/site.min.js";
paths.concatCssDest = paths.webroot + "lib/site.min.css";


gulp.task("min:js", function () {
    return gulp.src(paths.js)
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src(paths.css)
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);
