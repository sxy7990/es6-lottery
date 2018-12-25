import gulp from 'gulp'
import gulpif from 'gulp-if'
import gutil from 'gulp-util'
import args from './util/args'

// 当源文件发生改变时，自动编译
gulp.task('browser', (cb)=>{
  if(!args.watch) {
    return cb()
  }
  // watch：第一个参数指定参数目录，第二个参数要执行的任务
  gulp.watch('app/**/*js', ['scripts'])
  gulp.watch('app/**/*ejs', ['pages'])
  gulp.watch('app/**/*css', ['css'])
})