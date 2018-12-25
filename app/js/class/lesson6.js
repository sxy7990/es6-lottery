/**
 * 数组扩展
 */
{
  // 数组化
  let arr = Array.of(3, 4, 5, 9, 10);
  console.log('arr=', arr);
  // 空数组
  let empty = Array.of();
  console.log('empty', empty);
}

{
  // 拿到数组 
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);
  pArr.forEach(function(item){
    console.log(item.textContent);
  })

  // 拿到数组并比遍历
  console.log(Array.from([1, 2, 3], function(item){return item * 2}));
}

{
  // 填充
  console.log('fill-7', [1, 'a', undefined].fill(7));// 7, 7, 7
  console.log('fill,pos', ['a', 'b', 'c', 'd', 'r'].fill(7, 1, 3)); // a, 7, 7, d, r
}

{
  // 取key
  for(let index of [1, 2, 3, 4, 5].keys()) {
    console.log('keys', index);
  }
  // 取value
  for(let index of [1, 2, 3, 4, 5].values()) {
    console.log('values', index);
  }
  // 取key和value
  for(let [index, value] of [1, 2, 3, 4, 5].entries()) {
    console.log('keys, value', index, value);
  }
}

{
  // 复制某段
  console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 5));
}

{
  // 查找
  console.log([1, 2, 3, 4, 5, 6].find((item)=>item > 3)); // 第一个符合条件的值
  console.log([1, 2, 3, 4, 5, 6].findIndex((item)=>item > 3));// 第一个符合条件的值的下标
}

{
  console.log('number', [1, 2, NaN].includes(1));// true
  console.log('number', [1, 2, NaN].includes(NaN));// true
}



