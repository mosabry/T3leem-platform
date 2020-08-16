const gulp = require("gulp");
htmlmin = require("gulp-htmlmin");
sass = require("gulp-sass");
sourcemaps = require("gulp-sourcemaps");
autoprefixer = require("gulp-autoprefixer");
concat = require("gulp-concat");
uglify = require("gulp-uglify");
imagemin = require("gulp-imagemin");
livereload = require("gulp-livereload");

// HTML Task
gulp.task("html", () => {
    return (
        gulp
            .src("./src/*.html")
            // .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest("./dist"))
            .pipe(livereload())
    );
});

// CSS Task
gulp.task("css", () => {
    return gulp
        .src("./src/assets/css/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(autoprefixer("last 2 versions"))
        .pipe(concat("main.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist/assets/css"))
        .pipe(livereload());
});

// JS Task
gulp.task("js", () => {
    return gulp
        .src("src/assets/js/*.js")
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dist/assets/js"))
        .pipe(livereload());
});

// Image Task
gulp.task('image', (done) => {
    gulp.src('./src/assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/img'))
        .pipe(livereload())
    done();
})

// Watch Task
gulp.task("watch", () => {
    require("./server");
    livereload.listen();
    gulp.watch("./src/*.html", gulp.series("html"));
    gulp.watch("./src/assets/css/**/*.scss", gulp.series("css"));
    gulp.watch("./src/assets/js/*.js", gulp.series("js"));
    gulp.watch('./src/assets/img/*', gulp.series('image'));
});
