import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveserver from 'gulp-live-server'
import args from './util/args'

gulp.task('serve', (cb)=>{
  // 不在监听状态下，返回
  if(!args.watch) {
    return cb()
  }
  // 创建一个服务器
  var server = liveserver.new(['--harmony', 'server/bin/www'])
  // 启动
  server.start()
  // 监听js、ejs，发生改变时自动刷新
  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file){
    server.notify.apply(server, [file])
  })
  // 前端路由、接口发生变化，需要重启服务
  gulp.watch(['server/router/**/*.js', 'server/app.js'], function() {
    server.start.bind(server)()
  })
})