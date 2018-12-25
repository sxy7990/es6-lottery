/**
 * 
 */
{
  function test(x, y = 'world', c) {
    console.log('默认值', x, y, c);
  }
  test('hello', 'kill', 'haha');
}

{
  let x = 'test';
  function test2(x, y = x) {
    console.log('作用域', x, y);
  }
  test2('kill');
}

{
  function test3(...arg) {
    for(let v of arg) {
      console.log('rest', v);
    }
  }
  test3(1, 2, 3, 4, 'a');
}

{
  console.log('a', ...[1, 2, 3]);
}

{
  let arrow = v => v * 2;
  let arrow2 = () => 5;
  console.log('arrow', arrow(3));
  console.log(arrow2());
}

{
  // 伪调用
  function tail(x) {
    console.log('tail', x);
  }
  function fx(x) {
    return tail(x);
  }
  fx(123);
}
