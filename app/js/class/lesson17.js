/**
 * Module模块化
 */

// 导出语句（不建议这样写）
// export let A = 123;

// export let test = () => {
//   console.log('test');
// }

// export class Hello {
//   test() {
//     console.log('class');
//   }
// }

// 另一种
let A = 123;
let test = () => {
  console.log('test');
}
class Hello {
  test() {
    console.log('class');
  }
}

export default {
  A,
  test,
  Hello
}

