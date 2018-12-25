/**
 * Iterator
 */
{
  // iterator（遍历器）接口
  // 数组有默认的iterator接口
  let arr = ['hello', 'world'];
  let map = arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}

{
  // for of底层是iterator
  // 对象没有for of，通过iterator自定义for of
  let obj = {
    start: [1, 2, 3],
    end: [5, 7],
    [Symbol.iterator]() {
      let self = this;
      let index = 0;
      let arr = self.start.concat(self.end);
      let len = arr.length;
      return {
        next() {
          if(index < len) {
            return {value: arr[index++], done: false}
          }
          else {
            return {value: arr[index++], done: true}
          }
        }
      }
    }
  }
  for(let key of obj) {
    console.log(key);
  }
  /* 总结：不管要遍历什么样的数据结构，如果想自定义部署iterator方法，一定按照上面的操作，一定要包含next方法 */
}

{
  let arr = ['hello', 'world'];
  for(let value of arr) {
    console.log('value', value);
  }
}