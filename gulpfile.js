var gulp = require("gulp");
var cleancss = require("gulp-clean-css");
var minifyjs = require("gulp-minify");
var uglifyjs = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
var replace = require("gulp-replace");
var del = require("del");

gulp.task("build:css", function() {
  return gulp
    .src("source/css/*.css")
    .pipe(cleancss())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("build:js", function() {
  return gulp
    .src("source/js/*.js")
    .pipe(minifyjs({ noSource: true }))
    .pipe(uglifyjs())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("build:html", function() {
  return gulp
    .src("source/index.html")
    .pipe(replace("application.js", "application-min.js"))
    .pipe(
      replace(
        "libs/bootstrap/dist/css/bootstrap.min.css",
        "css/bootstrap.min.css"
      )
    )
    .pipe(replace("libs/jquery/dist/jquery.min.js", "js/jquery.min.js"))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});

gulp.task("copy:bootstrap", function() {
  return gulp
    .src("source/libs/bootstrap/dist/css/bootstrap.min.css")
    .pipe(gulp.dest("dist/css"));
});

gulp.task("copy:jquery", function() {
  return gulp
    .src("source/libs/jquery/dist/jquery.min.js")
    .pipe(gulp.dest("dist/js"));
});

gulp.task("watch", function() {
  gulp.watch("source/css/*.css", gulp.series("build:css"));
  gulp.watch("source/js/*.js", gulp.series("build:js"));
  gulp.watch("source/*.html", gulp.series("build:html"));
});

gulp.task("clean:dist", function() {
  return del(["dist/css/*", "dist/js/*", "dist/img/*", "dist/index.html"]);
});

gulp.task(
  "build:all",
  gulp.parallel(
    "build:css",
    "build:js",
    "build:html",
    "copy:jquery",
    "copy:bootstrap"
  )
);
