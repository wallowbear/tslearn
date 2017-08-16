var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var del=require('del');
var paths = {
    pages: ['src/**/*.html','src/**/*.js']
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});
gulp.task("clean",function(){
    del(["dist"])
})
gulp.task("default",["clean","copy-html"], function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest("dist"));
});

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