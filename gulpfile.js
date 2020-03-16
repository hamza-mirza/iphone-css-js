//Plugin variables
const gulp = require("gulp"),
watch = require("gulp-watch"),
uglify = require('gulp-uglify'),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
cssImport = require("postcss-import"),
mixins = require("postcss-mixins"),
nested = require('postcss-nested'),
plumber = require("gulp-plumber");
browserSync = require("browser-sync").create(),
webpack = require("webpack");

//File paths

let cssPath = "resources/css/styles.css",
cssWatchPath = "resources/css/**/*.css";
jsPath = "resources/scripts/**/*.js",
distPathCss = "resources/dist/css",
distPathJs = "resources/dist/scripts";

//Plumber error function
let onError = function(err) {
    console.log(err);
    this.emit("end");
}

//Tasks
gulp.task("styles", function(){
    return gulp.src(cssPath).
    pipe(plumber({
        errorHandler: onError
    })).
    pipe(postcss([cssImport, mixins, nested, autoprefixer])).
    pipe(postcss([ require('postcss-simple-vars')({ silent: true }) ])).
    // pipe(minify()).
    pipe(gulp.dest(distPathCss));
});


gulp.task("watch", function(){

    browserSync.init({
        notify: false,
        server: {
            baseDir: "."
        }
    });

    watch('./index.html', function(){
        browserSync.reload();
    });
    watch(cssWatchPath, function(){
        gulp.start('cssInject');
    });

});

gulp.task("cssInject", ['styles'], function(){
    return gulp.src(distPathCss).
    pipe(browserSync.stream());
});

watch("resources/scripts/**/*.js", function() {
      gulp.start("scriptsRefresh");
  });

gulp.task("scripts", function(callback) {
    webpack(require("./webpack.config.js"), function(err, stats) {
        if (err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    });
});

gulp.task("scriptsRefresh", ["scripts"], function() {
    browserSync.reload();
});
