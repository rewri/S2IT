var gulp 	= require("gulp");
var minCss 	= require("gulp-clean-css");
var minJs 	= require("gulp-uglify");
var rename 	= require("gulp-rename");

var paths = {
	"node": "./node_modules/",
	"css": "./assets/css/",
	"js": "./assets/js/",
	"fonts": "./assets/fonts/"
};

gulp.task("dev", [], function() {
	console.log("Setting up Simple Line Icons files");

	gulp.src([
		paths.node + "simple-line-icons/css/simple-line-icons.css"
	]).pipe(gulp.dest(paths.css));

	gulp.src([
		paths.node + "simple-line-icons/fonts/*"
	]).pipe(gulp.dest(paths.fonts));

	console.log("Setting up Vue.js files");
	gulp.src([
		paths.node + "vue/dist/vue.min.js"
	]).pipe(gulp.dest(paths.js));

	gulp.src([
		paths.node + "vue-resource/dist/vue-resource.min.js"
	]).pipe(gulp.dest(paths.js));
});

gulp.task("prod", [], function() {
	console.log("Minifying files");

    gulp.src(paths.css + "reset.css")
        .pipe(minCss({compatibility: "ie8", debug: true, processImport: false, rebase: false}, function(details) {
            console.log(details.name + " (original): " + details.stats.originalSize);
            console.log(details.name + " (minified): " + details.stats.minifiedSize);
        }))
        .pipe(rename("reset.min.css"))
        .pipe(gulp.dest(paths.css));

    gulp.src(paths.css + "simple-line-icons.css")
        .pipe(minCss({compatibility: "ie8", debug: true, processImport: false, rebase: false}, function(details) {
            console.log(details.name + " (original): " + details.stats.originalSize);
            console.log(details.name + " (minified): " + details.stats.minifiedSize);
        }))
        .pipe(rename("simple-line-icons.min.css"))
        .pipe(gulp.dest(paths.css));  

    gulp.src(paths.css + "styles.css")
        .pipe(minCss({compatibility: "ie8", debug: true, processImport: false, rebase: false}, function(details) {
            console.log(details.name + " (original): " + details.stats.originalSize);
            console.log(details.name + " (minified): " + details.stats.minifiedSize);
        }))
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest(paths.css));  

    gulp.src(paths.js + "custom.js")
        .pipe(minJs())
        .pipe(rename("custom.min.js"))
        .pipe(gulp.dest(paths.js));                            

});
