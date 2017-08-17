var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var del=require('del');
var concat=require("gulp-concat");
var sequence=require("gulp-sequence");
var order=require("gulp-order");
var paths = {
    pages: ['src/**/*.html','src/**/*.js']
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});
gulp.task("clean",function(){
    del(["dist"])
});
gulp.task("concatLibFiles", function () {

    return gulp.src(["libs/**/*.js"])
    // .pipe(order(["dist/view/Page1.js","dist/view/Page2.js","dist/main.js"]))
        .pipe(concat("libs.js"))
        .pipe(gulp.dest("dist"))
});
gulp.task("concatPageFiles", function () {

    return gulp.src(["dist/**/*.js"])
    // .pipe(order(["dist/view/Page1.js","dist/view/Page2.js","dist/main.js"]))
        .pipe(concat("page.js"))
        .pipe(gulp.dest("dist"))
});
gulp.task("outfile",function(){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest("dist"));
});

gulp.task("default", sequence("clean", "copy-html", "outfile", "concatLibFiles"));

// var gulp = require("gulp");
// var browserify = require("browserify");
// var source = require('vinyl-source-stream');
// var tsify = require("tsify");
// var paths = {
//     pages: ['src/*.html']
// };
//
// gulp.task("copy-html", function () {
//     return gulp.src(paths.pages)
//         .pipe(gulp.dest("dist"));
// });
//
// gulp.task("default", ["copy-html"], function () {
//     return browserify({
//         basedir: '.',
//         debug: false,
//         entries: ['src/main.ts', "src/view/Page1.ts", "src/view/Page2.ts"],
//         cache: {},
//         packageCache: {}
//     })
//         .plugin(tsify)
//         .bundle()
//         .pipe(source('main.js'))
//         .pipe(gulp.dest("dist"));
// });