let gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin');
gulp.task('sass',()=>{
    gulp.src('./src/scss/*.scss')
    //.pipe(cssnano())
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'))
})  

gulp.task('index',()=>{
    gulp.src('./src/img/index/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/index'))
})  

gulp.task('product',()=>{
    gulp.src('./src/img/product/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/product'));
})  

gulp.task('detail',()=>{
    gulp.src('./src/img/detail/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/detail'));
})  

gulp.task('login',()=>{
    gulp.src('./src/img/login/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/login'));
})  

gulp.task('register',()=>{
    gulp.src('./src/img/register/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/register'));
})  

gulp.task('cart',()=>{
    gulp.src('./src/img/cart/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/cart'));
})  

gulp.task('js',()=>{
    gulp.src('./src/js/es6/*.js')
    .pipe(gulp.dest('./dist/js/es5'));
})

gulp.task('default',()=>{
    gulp.watch(['./src/scss/*.scss'],['sass']);
    gulp.watch(['./src/img/index/*.*'],['index']);
    gulp.watch(['./src/img/product/*.*'],['product']);
    gulp.watch(['./src/img/detail/*.*'],['detail']);
    gulp.watch(['./src/img/register/*.*'],['register']);
    gulp.watch(['./src/img/login/*.*'],['login']);
    gulp.watch(['./src/img/cart/*.*'],['cart']);
    gulp.watch(['./src/js/es6/*.js'],['js']);
})