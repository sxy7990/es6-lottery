/**
 * Generator
 */
{
  // Generator函数是ES6提供的一种异步编程解决方案
  // generator函数基本定义
  // generator返回的就是iterator接口
  let tell = function* () {
    yield 'a';
    yield 'b';
    return 'c'
  }
  let k = tell();
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}

{
  // generator也可以作为遍历器的返回值
  /**
   * 上一章说过，任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象。
     由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。
     上面代码中，Generator 函数赋值给Symbol.iterator属性，从而使得myIterable对象具有了 Iterator 接口，可以被...运算符或者for of遍历了。
   */
  let obj = {};
  obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  }
  console.log('...遍历', ...obj);
  // for(let value of obj) {
  //   console.log('for of遍历', value);
  // }
}

{
  // 对于状态机，generator有明显的优势
  // 比如一个事务只存在三种状态：a， b， c，状态是循环的
  let state = function* () {
    while(1) {
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status = state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}

// {
     // assign
//   let state = async function () {
//     while(1) {
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status = state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

{
  // 实例：抽奖逻辑
  // 抽奖次数限制
  let draw = function(count) {
    // 具体抽奖逻辑
    console.log(`剩余${count}次`);
  }

  let residue = function* (count) {
    // 次数限制
    while(count > 0) {
      count--;
      // 执行抽奖业务逻辑
      yield draw(count);
    }
  }

  let star = residue(5);
  let btn = document.createElement('button');
  btn.id = 'start';
  btn.textContent = '抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click', function() {
    star.next();
  }, false)
}

{
  // 实例：长轮询
  // 长轮询——服务端某个数据状态定期变化，前端需要定时取状态，因为http是无状态的
  // 两种方式：websocket和长轮询
  let ajax = function* () {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({code: 0})
      }, 200);
    })
  }

  let pull = () => {
    let generator = ajax();
    let step = generator.next();
    step.value.then((d) => {
      // 如果服务端发送的code不等于0，一直轮询
      if(d.code !== 0) {
        setTimeout(() => {
          console.warn('wait');
          pull();
        }, 1000);
      }
      else {
        console.warn(d);
      }
    })
  }

  pull();
}