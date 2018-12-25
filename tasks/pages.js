import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'

gulp.task('pages', () => {
  // 打开文件，打开app目录下所有的ejs文件
  return gulp.src('app/**/*.ejs')
    // copy到server目录下
    .pipe(gulp.dest('server'))
    // 监听文件，热更新
    .pipe(gulpif(args.watch, livereload()))
})