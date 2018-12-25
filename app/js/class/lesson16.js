/**
 * Decorator
 */
{
  // Decorator修饰器函数
  // 1、修饰器是个函数
  // 2、修改类的行为
  // 3、只能对类使用
  let readonly = (target, name, descriptor) => {
    descriptor.writable = false;
    return descriptor
  }
  // 类内使用
  class Test {
    @readonly
    time() {
      return '2018-6-22'
    }
  }
  let test = new Test();

  // test.time = () => {
  //   console.log('reset time');
  // }
  console.log(test.time());
}

{
  let typename = (target, name, descriptor) => {
    target.myname = 'hello';
  }
  // 类外使用
  // 通过这种方式声明的myname是类的静态属性
  @typename
  class Test {
  }
  console.log('类的修饰', Test.myname);

  // 第三方库修饰器的js库：core-decorators，通过npm安装，直接通过@使用
}

{
  // 实例：js埋点
  /**
   * 1、复用性：把埋点系统抽离出来，变成可复用的模块，埋点接口可以任意改
   * 2、埋点系统从业务逻辑中拆离，业务代码的简洁度和可维护性提高
   */
  let log = (type) => {
    return (target, name, descriptor) => {
      let src_method = descriptor.value;
      descriptor.value = (...arg) => {
        src_method.apply(target, arg);
        // 埋点接口，实际开发可变
        console.log(`log ${type}`);
      }
    }
  }
  class AD {
    @log('show')
    show() {
      console.log('ad is show');
    }
    @log('click')
    click() {
      console.log('ad is click');
    }
  }

  let ad = new AD();
  ad.show();
  ad.click();
}