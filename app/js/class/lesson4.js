/**
 * 字符串扩展
 */
{
  console.log('a', '\u0061');
  console.log('s', '\u20BB7');
  // 长度大于2个字节的要用大括号
  console.log('s', '\u{20BB7}');

}

{
  let s = '𠮷';
  // ES5
  console.log('length', s.length);
  console.log('0', s.charAt(0));
  console.log('1', s.charAt(1));
  console.log('at0', s.charCodeAt(0));
  console.log('at1', s.charCodeAt(1));

  let s1 = '𠮷a';
  // ES6
  console.log('length', s.length);
  console.log('code0', s1.codePointAt(0));
  console.log('code0', s1.codePointAt(0).toString(16));
  console.log('code1', s1.codePointAt(1));
  console.log('code2', s1.codePointAt(2));
}

{
  // ES5
  console.log(String.fromCharCode('0x20bb7'));
  // ES6
  console.log(String.fromCodePoint('0x20bb7'));
}

{
  let str = '\u{20bb7}abc';
  // ES5
  for(let i = 0; i < str.length; i++) {
    console.log('es5', str[i]);
  }
  // ES6
  for(let code of str) {
    console.log('es6', code);
  }
}

{
  let str = 'string';
  // 判断是否包含某字符（串）
  console.log('include', str.includes('r'));
  // 判断是否开始于某字符（串）
  console.log('start', str.startsWith('str'));
  // 判断是否结束于某字符（串）
  console.log('end', str.endsWith('ng'));
}

{
  // 重复
  let str = 'abc';
  console.log('repeat', str.repeat(2));
}

{
  // 模板字符串
  let name = 'list';
  let info = 'hello world';
  let m = `I am ${name}, ${info}`;
  console.log(m);
}

{
  // ES7草案 使用频率高
  // 补白
  console.log('1'.padStart(2, '0'));
  console.log('1'.padEnd(2, '0'));
}

{
  // 标签模板
  let user = {
    name: 'list',
    info: 'hello world'
  }
  console.log(abc`I am ${user.name}, ${user.info}`); 
  function abc(s, v1, v2) {
    console.log(s, v1, v2);
    return s+v1+v2;
  }
}

{
  // 提前转义
  console.log(String.raw`Hi\n${1+3}`);
  console.log(`Hi\n${1+3}`);
}