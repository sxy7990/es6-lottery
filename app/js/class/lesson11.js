/**
 * Proxy和Reflect
 */
{
  // Proxy代理
  let obj = {
    time: '2017-06-22',
    name: 'net',
    _r: 123
  };

  let monitor = new Proxy(obj, {
    // 拦截对象属性的获取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set(target, key, value) {
      if(key === 'name') {
        return target[key] = value;
      }
      else {
        return target[key];
      }
    },
    // 拦截key in object操作
    has(target, key) {
      if(key === 'name') {
        return target[key];
      }
      else {
        return false;
      }
    },
    // 拦截delete
    deleteProperty(target, key) {
      if(key.indexOf('_') > -1) {
        delete target[key];
        return true;
      }
      else {
        return target[key];
      }
    },
    // 拦截Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item != 'time')
    }
  })
  console.log('get', monitor.time);

  monitor.time = '12:12';
  monitor.name = 'shen';
  console.log('set', monitor);

  console.log('has', 'name' in monitor, 'time' in monitor);

  // delete monitor.name;
  // delete monitor._r;
  // console.log('delete', monitor);

  console.log('ownKeys', Object.keys(monitor));

  /* 总结：用户不能直接操作obj对象，而是通过代理间接操作，并且代理可以随意写业务逻辑 */

}

{
  let obj = {
    time: '2017-06-22',
    name: 'net',
    _r: 123
  };
  console.log('Reflect get', Reflect.get(obj, 'time'));
  Reflect.set(obj, 'name', 'haode');
  console.log(obj);
  console.log('has', Reflect.has(obj, 'name'));
  /* 总结：以后要改变直接操作Object.data这个习惯，要多用Reflect */
}

// 实际开发中实例
{
  // 对数据校验，比如提交前判断数据类型是否符合条件
  // 解耦
  // 传统的做法对某个属性进行限制的话，在赋值的时候要进行判断，然后才允许修改对象。
  // 通过代理的方式把条件和对象本身（业务逻辑）完全隔开，在后期代码的维护、代码的整洁度、代码的复用度都提升
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if(target.hasOwnProperty(key)) {
          let va = this._validator[key];
          if(!!va(value)) {
            return Reflect.set(target, key, value, proxy);
          }
          else {
            throw Error(`不能设置${key}到${value}`);
          }
        }
        else {
          throw Error(`${key}不存在`);
        }
      }
    })
  }

  const personValidors = {
    name(val) {
      return typeof val === 'string';
    },
    age(val) {
      return typeof val === 'number' && val > 18
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return validator(this, personValidors);
    }
  }
  
  const person = new Person('shen', 22);
  console.log(person);

  person.name = 'shenxiaoyong';
  console.log(person);

}