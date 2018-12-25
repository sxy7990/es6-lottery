// 补全babel编译ES7
import 'babel-polyfill'

/* 学习语法时用的
// import './class/lesson17'
// import方式
// 1、与export一一对应
// import {A, test, Hello} from './class/lesson17'
// 2、取别名，导出端需要一一写export
// import * as lesson from './class/lesson17'
// 3、随便指定名称，导出端只写一个export
// import Shen from './class/lesson17'
// let h = new Shen.Hello;
// h.test();
*/

import Lottery from './lottery'
const syy = new Lottery();

console.log(syy);
