/**
 * Symbol
 */
{
  // 声明
  let a1 = Symbol();
  let a2 = Symbol();
  console.log(a1 === a2);
  let a3 = Symbol.for('a3');
  let a4 = Symbol.for('a3');
  console.log(a3 === a4);
}

{
  let a1 = Symbol.for('abc');
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  };
  console.log('obj', obj);

  // let of拿不到Symbol的key，value
  for(let [key, value] of Object.entries(obj)) {
    console.log('let of', key, value);
  }

  // 拿到Symbol的key，value
  Object.getOwnPropertySymbols(obj).forEach(function(item) {
    console.log(item, obj[item]);
  })

  // 拿到所有的key，value
  Reflect.ownKeys(obj).forEach(function(item){
    console.log('ownkeys', item, obj[item]);
  })

}