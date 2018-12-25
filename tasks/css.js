import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'

gulp.task('css', ()=>{
  // 打开app下所有的css文件
  return gulp.src('app/**/*.css')
    // copy到此目录下 
    .pipe(gulp.dest('server/public'))
    // 热更新
    .pipe(gulpif(args.watch, livereload()))
})