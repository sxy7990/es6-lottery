/**
 * 正则的扩展
 */
{
  // ES5中正则表达式
  // 两个参数，第一个指定表达式模式， 第二个修饰符
  let regex = new RegExp('sxy', 'i');
  // 一个参数
  let regex2 = new RegExp(/sxy/i);

  // test：检索字符串中指定的值。返回 true 或 false。
  console.log(regex.test('sxy123'), regex2.test('sxy123'));

  // ES6中
  let regex3 = new RegExp(/sxy/ig, 'i');
  // flags：返回修饰符
  console.log(regex3.flags);
}

{
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;

  // exec：检索字符串中指定的值。返回找到的值，并确定其位置。
  console.log('one', a1.exec(s), a2.exec(s));
  console.log('two', a1.exec(s), a2.exec(s));
  console.log('three', a1.exec(s));
  
  // stichy：检查是否开启“粘连”（sticky）修饰符(y)
  console.log(a1.sticky, a2.sticky);
}

{
  // u：如果处理的字符串中大于2个字节长度的字符，一定要用u；.不一定能匹配所有字符，除非小于2个字节的字符
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
  console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));

  console.log(/\u{61}/.test('a'));
  console.log(/\u{61}/u.test('a'));

  console.log('\u{20BB7}');

  let s = '𠮷';
  console.log('u', /^.$/.test(s));
  console.log('u-2', /^.$/u.test(s));

  console.log('test', /𠮷{2}/.test('𠮷𠮷'));
  console.log('test-2', /𠮷{2}/u.test('𠮷𠮷'));
}
