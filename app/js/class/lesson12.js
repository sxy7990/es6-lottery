/**
 * 类与对象
 */
{
  // 类的基本定义和生成实例
  class Parent {
    constructor(name = 'muke') {
      this.name = name;
    }
  }
  let v_parent = new Parent('shen');
  console.log('构造函数和实例', v_parent);
}

{
  // 继承
  class Parent {
    constructor(name = 'muke') {
      this.name = name;
    }
  }
  class Child extends Parent {
  }
  console.log('继承', new Child());
}

{
  // 继承 传递参数
  class Parent {
    constructor(name = 'muke') {
      this.name = name;
    }
  }
  class Child extends Parent {
    constructor(name = 'child') {
      // super一定放在第一位
      super(name);
      this.type = 'aaa';
    }
  }
  console.log('继承传递参数', new Child());
}

{
  // getter, setter
  class Parent {
    constructor(name = 'muke') {
      this.name = name;
    }
    // 虽然写法和方法一样，但这不是方法，是属性
    get longName() {
      return '12' + this.name;
    }
    set longName(value) {
      this.name = value;
    }
  }
  let v = new Parent();
  console.log('getter', v.longName);
  v.longName = 'hello';
  console.log('setter', v.longName);
}

{
  // 静态方法
  class Parent {
    constructor(name = 'muke') {
      this.name = name;
    }

    // 静态方法是通过类去调用，而不是通过类的实例调用
    static tell() {
      console.log('调用静态方法');
    }
  }
  Parent.tell();
}

{
  // 静态属性
  class Parent {
    constructor(name = 'muke') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }

  Parent.type = 'test';

  console.log('静态属性', Parent.type);
}