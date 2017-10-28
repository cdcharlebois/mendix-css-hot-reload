var gulp = require("gulp");

/**
 * Move the CSS files from CSS to /deployment/web/styles/css/{custom|lib}
 */
gulp.task("copy-css", function() {
    console.log("moving CSS files to deployment dir");
    gulp.src(["../theme/styles/css/**/*.css"])
        .pipe(gulp.dest("../deployment/web/styles/css"));
});

gulp.task("watch", function() {
    gulp.watch(["../theme/styles/css/**/*.css"], ["copy-css"]);
});

gulp.task("default", ["watch"]);