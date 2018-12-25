/**
 * 数值扩展
 */
{
  // 二进制表示
  console.log(0b111110111); //503
  // 八进制表示
  console.log(0o767); //503
}

{
  // 判断数值是否有尽头
  console.log('15', Number.isFinite(15)); //true
  console.log('NaN', Number.isFinite(NaN)); //false
  console.log('1/0', Number.isFinite('true'/0)); //false

  // 判断是否是NaN
  console.log('isNaN', Number.isNaN(NaN)); //true
  console.log('isNaN', Number.isNaN(1)); //false
}

{
  // 判断是否是整数
  let a = 35;
  console.log('isInt', Number.isInteger(a)); //true
  console.log('isInt', Number.isInteger(13.0)); //true
  console.log('isInt', Number.isInteger(13.1)); //false
  console.log('isInt', Number.isInteger('13'));
}

{
  console.log(Number.MAX_SAFE_INTEGER); //数最大的上限
  console.log(Number.MIN_SAFE_INTEGER); //数最小的下限
  // 判断数是否在这个区间（安全）
  console.log('10', Number.isSafeInteger(10)); //true
  console.log('a', Number.isSafeInteger('a')); //false
}

{
  // 取小数的整数部分
  console.log('4.1', Math.trunc(4.1));
  console.log('4.9', Math.trunc(4.9));
}

{
  // 判断数是否整数、负数、零
  console.log('-5', Math.sign(-5)); //-1
  console.log('5', Math.sign(5)); //1
  console.log('0', Math.sign(0)); //0
  console.log('字符串50', Math.sign('50')); //1
  console.log('字符串', Math.sign('foo')); //NaN
}

{
  // 立方根
  console.log('-1', Math.cbrt(-1)); //-1
  console.log('5', Math.cbrt(5)); //1.709975946676697
}

