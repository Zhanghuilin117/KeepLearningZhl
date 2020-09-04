<!--
 * @Author: Yu
 * @Date: 2020-08-07 10:30:01
 * @LastEditTime: 2020-08-07 10:37:42
 * @FilePath: \KeepLearning\Javascript\ES6\let和const.md
 * @Description: ''
-->

# let 和 const

1. let

2. const

   - const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const 只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

   ```javascript
   const foo = {};
   // 为 foo 添加一个属性，可以成功
   foo.prop = 123;
   foo.prop; // 123
   // 将 foo 指向另一个对象，就会报错
   foo = {}; // TypeError: "foo" is read-only
   ```

3. ES6 声明变量的 6 种方法

   ES5 只有两种声明变量的方法：var 命令和 function 命令。ES6 除了添加 let 和 const 命令，后面章节还会提到，另外两种声明变量的方法：import 命令和 class 命令。所以，ES6 一共有 6 种声明变量的方法。

4. globalThis

   任何环境下，globalThis 都是存在的，都可以从它拿到顶层对象，指向全局环境下的 this
