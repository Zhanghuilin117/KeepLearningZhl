<!--
 * @Author: Yu
 * @Date: 2020-08-10 20:47:23
 * @LastEditTime: 2020-08-11 19:57:54
 * @FilePath: /KeepLearning/Javascript/ES6/Symbol.md
 * @Description: ''
-->

# Symbol

## 1. 概述

- ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 Symbol 的原因。

  ```javascript
  let s1 = Symbol("foo");
  let s2 = Symbol("bar");

  s1; // Symbol(foo)
  s2; // Symbol(bar)

  s1.toString(); // "Symbol(foo)"
  s2.toString(); // "Symbol(bar)"
  ```

## 2. Symbol.prototype.description

- ES2019 提供了一个实例属性 description，直接返回 Symbol 的描述。

  ```javascript
  const sym = Symbol("foo");

  sym.description; // "foo"
  ```

## 3. 作为属性名的 Symbol

- 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

  ```javascript
  let mySymbol = Symbol();

  // 第一种写法
  let a = {};
  a[mySymbol] = "Hello!";

  // 第二种写法
  let a = {
    [mySymbol]: "Hello!",
  };

  // 第三种写法
  let a = {};
  Object.defineProperty(a, mySymbol, { value: "Hello!" });

  // 以上写法都得到同样结果
  a[mySymbol]; // "Hello!"
  ```

- **注意，Symbol 值作为对象属性名时，不能用点运算符。**

## 4. 实例

- [消除魔术字符串](https://es6.ruanyifeng.com/#docs/symbol#%E5%AE%9E%E4%BE%8B%EF%BC%9A%E6%B6%88%E9%99%A4%E9%AD%94%E6%9C%AF%E5%AD%97%E7%AC%A6%E4%B8%B2)

- [模块的 Singleton 模式](https://es6.ruanyifeng.com/#docs/symbol#%E5%AE%9E%E4%BE%8B%EF%BC%9A%E6%A8%A1%E5%9D%97%E7%9A%84-Singleton-%E6%A8%A1%E5%BC%8F)

## 5. 属性名的遍历

- Symbol 作为属性名，遍历对象的时候，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。

- 但是，它也不是私有属性，有一个 Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

- 由于以 Symbol 值作为键名，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。

  ```javascript
  let size = Symbol("size");

  class Collection {
    constructor() {
      this[size] = 0;
    }

    add(item) {
      this[this[size]] = item;
      this[size]++;
    }

    static sizeOf(instance) {
      return instance[size];
    }
  }

  let x = new Collection();
  Collection.sizeOf(x); // 0

  x.add("foo");
  Collection.sizeOf(x); // 1

  Object.keys(x); // ['0']
  Object.getOwnPropertyNames(x); // ['0']
  Object.getOwnPropertySymbols(x); // [Symbol(size)]
  ```

  - 上面代码中，对象 x 的 size 属性是一个 Symbol 值，所以 Object.keys(x)、Object.getOwnPropertyNames(x)都无法获取它。这就造成了一种非私有的内部方法的效果。

## 6. Symbol.for()，Symbol.keyFor()

- 有时，我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

- Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的 key。

  ```javascript
  let s1 = Symbol.for("foo");
  Symbol.keyFor(s1); // "foo"

  let s2 = Symbol("foo");
  Symbol.keyFor(s2); // undefined
  ```

- **注意，Symbol.for()为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行。**

## 7. [内置的 Symbol 值](https://es6.ruanyifeng.com/#docs/symbol#%E5%86%85%E7%BD%AE%E7%9A%84-Symbol-%E5%80%BC)

- 除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。
- 暂不学习
