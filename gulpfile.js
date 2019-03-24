/**
 * Created by Administrator on 2019/1/21.
 */
var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var gulpLoadPlugins = require('gulp-load-plugins');

var $ = gulpLoadPlugins();
console.log($)
gulp.task('clear', function (cb) {
    return del(['dist/**/*'])
});

gulp.task('images', function () {
    gulp.src('./app/images/**/*')
        .pipe(gulp.dest('dist/images'))
        .pipe($.connect.reload())
});

gulp.task('testLess', function () {
    gulp.src('./app/less/app.less')
        .pipe($.less())
        .pipe(gulp.dest('app/css'))
        .pipe($.cleanCss())
        .pipe(gulp.dest('dist/css'))
        .pipe($.connect.reload());
    gulp.src('./app/less/**/*.css')
        .pipe(gulp.dest('app/css'))
        .pipe($.cleanCss())
        .pipe(gulp.dest('dist/css'))
        .pipe($.connect.reload());
});

gulp.task('html', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(['./app/**/*.html', '!./app/include/*'])
        .pipe($.fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe($.revAppend())
        .pipe($.htmlmin(options))
        .pipe(gulp.dest('dist'))
        .pipe($.connect.reload())
});

gulp.task('scripts', function () {
    gulp.src('./app/scripts/**/*')
        .pipe($.uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe($.connect.reload())
});
// 监视文件改动并重新载入
gulp.task('serve',function () {
    $.connect.server({
        port: 8081, //指定端口号，在浏览器中输入localhost:8080就可以直接访问生成的html页面
        root: './dist', //指定html文件起始的根目录
        livereload: true //启动实时刷新功能（配合上边的connect.reload()方法同步使用）
    });
    gulp.start('watch')
});

gulp.task('watch',function () {
    $.watch('./app/less/**/*',function () {
        gulp.start('testLess');	//执行html任务
    })
    $.watch('./app/scripts/*.js',function () {
        gulp.start('scripts');	//执行html任务
    })
    $.watch('./app/images/**/*',function () {
        gulp.start('images');	//执行html任务
    })
    $.watch('./app/**/*.html',function () {
        gulp.start('html');	//执行html任务
    })
});

gulp.task('build', ['clear'], function () {
    runSequence('testLess', [ 'scripts', 'images', 'html'])
});