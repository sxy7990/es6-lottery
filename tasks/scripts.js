import gulp from 'gulp'
import gulpif from 'gulp-if'
import concat from 'gulp-concat'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import named from 'vinyl-named'
import livereload from 'gulp-livereload'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import {log, colors} from 'gulp-util'
import args from './util/args'

// 创建任务
gulp.task('scripts', ()=>{
  // 打开文件
  return gulp.src(['app/js/index.js'])
    // 处理错误
    .pipe(plumber({
      errorHandler: function() {

      }
    }))
    // 对文件命名
    .pipe(named())
    // 对js编译
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader'
        }]
      }
    }), null, (err, stats)=>{
      // 对错误的处理
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false
      }))
    })
    // copy到此目录下
    .pipe(gulp.dest('server/public/js'))
    // 重命名
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
    // 压缩刚才的文件
    .pipe(uglify({
      compress: {properties: false},
      output: {'quote_keys': true}
    }))
    // 重新保存文件
    .pipe(gulp.dest('server/public/js'))
    // 此时有两份文件，一份是编译好的未压缩，一份是编译好的压缩好的

    // 监听文件，当文件发生变化，热更新
    .pipe(gulpif(args.watch, livereload()))
})
