/**
 * let和const
 */

function test() {
  // for(let i = 0; i < 3; i++) {
  //   console.log(i);
  // }
  // let a = 1;
}

test();

function last() {
  const PI = 3.14;
  const k = {
    a: 1
  }
  k.b = 3;
  console.log(PI, k);
}

last();