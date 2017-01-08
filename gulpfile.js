var gulp 	= require("gulp");
var minCss 	= require("gulp-clean-css");
var minJs 	= require("gulp-uglify");

var paths = {
	"node": "./node_modules/",
	"css": "./assets/css/",
	"js": "./assets/js/",
	"fonts": "./assets/fonts/"
};

gulp.task("init", [], function() {
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
