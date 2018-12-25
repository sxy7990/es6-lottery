/**
 * Set和Map和Array，对比
 */
{
  // set一个list
  let list = new Set();
  list.add(2);
  list.add(4);
  console.log('size', list.size);
}

{
  // 赋初值
  let arr = [1, 2, 3, 4, 5];
  let list = new Set(arr);
  console.log('size', list.size);
}

{
  // 重复的不会被添加
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log('list', list);
}

{
  // 去重 不同类型不去重
  let arr = [1, 2, 3, 1, '2'];
  let list2 = new Set(arr);
  console.log('unique', list2);
}

{
  // add delete clear has
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  console.log('has', list.has('add'));
  console.log('delete', list.delete('has'), list);
  list.clear();
  console.log('clear', list);
}

{
  // 遍历
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);
  for(let key of list.keys()) {
    console.log('keys', key);
  }

  for(let value of list.values()) {
    console.log('values', value);
  }

  for(let [key, value] of list.entries()) {
    console.log(key, value);
  }

  list.forEach((item) => {
    console.log(item);
  })
}

{
  // WeakSet的元素只能是对象，不会检测这个对象有没有在其他地方引用，不会挂钩垃圾回收机制
  // 是一个地址的引用
  // 其他方法和Set一样
  // 没有set属性，不能使用clear，不能遍历
  let weakList = new WeakSet(arg);
  let arg = {};
  weakList.add(arg);
  console.log('weakList', weakList);
}

{
  // map的key可以是任意数据类型
  let map = new Map();
  let arr = ['123'];
  map.set(arr, 789);
  console.log('map', map, map.get(arr));
}

{
  let map = new Map([['a', 123], ['b', 456]]);
  console.log('map args', map);
  console.log('size', map.size);
  console.log('delete', map.delete('a'), map);
  console.log('clear', map.clear(), map);
}

{
  let weakmap = new WeakMap();
  let o = {};
  weakmap.set(o, 123);
  console.log(weakmap.get(o));
}

// 数据结构横向对比，增，查，改，删
{
  // map和array的对比
  let map = new Map();
  let array = [];
  // 增
  map.set('t', 1);
  array.push({t: 1});
  console.warn('map-array', map, array);

  // 查
  let map_exist = map.has('t');
  let array_exist = array.find(item => item.t);
  console.warn('map-array', map_exist, array_exist);

  // 改
  map.set('t', 2);
  array.forEach(item => item.t ? item.t = 2 : '');
  console.warn('map-array-modify', map, array);

  // 删
  map.delete('t');
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.warn('map-array-empty', map, array);
}

{
  // set和array的对比
  let set = new Set();
  let array = [];

  // 增
  set.add({t: 1});
  array.push({t: 1});
  console.error('set-array', set, array);

  // 查
  let set_exist = set.has({t: 1});
  let array_exist = array.find(item => item.t);
  console.error('set-array', set_exist, array_exist);

  // 改
  set.forEach(item => item.t ? item.t = 2 : '');
  array.forEach(item => item.t ? item.t = 2 : '');
  console.error('set-array-modify', set, array);

  // 删
  set.forEach(item => item.t ? set.delete(item) : '');
  let index = array.findIndex(item => item.t);
  array.splice(index, 1);
  console.error('set-array-empty', set, array);
}

{
  // map、set、object对比
  let item = {t: 1};
  let map = new Map();
  let set = new Set();
  let obj = {};

  // 增
  map.set('t', 1);
  set.add(item);
  obj['t'] = 1;
  console.log('map-set-object', map, set, obj);

  // 查
  console.log({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  })

  // 改
  map.set('t', 2);
  item.t = 2;
  obj['t'] = 2;
  console.log('map-set-obj-modify', map, set, obj);

  // 删
  map.delete('t');
  set.delete(item);
  delete obj['t'];
  console.log('map-set-obj-empty', map, set, obj);

  /* 总结：能使用map不使用数组，如果对数据要求比较高，保证存储数据的唯一性，考虑使用set；
  Array和Object要适当放弃*/
}

