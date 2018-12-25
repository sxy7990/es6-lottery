import yargs from 'yargs'

const args = yargs

// 配置5个命令
  .option('production', {
    boolean: true,
    default: false,
    describe: 'min all scripts'
  })

  .option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all files'
  })

  .option('verbose', {
    boolean: true,
    default: false,
    describe: 'log'
  })

  .option('sourcemaps', {
    describe: 'force the creation of sourcemaps'
  })

  .option('port', {
    string: true,
    default: 8080,
    describe: 'server port'
  })

  // 表示对输入的命令行以字符串解析
  .argv

  export default args;

