<!--
 * @Author: Yu
 * @Date: 2020-08-11 19:57:20
 * @LastEditTime: 2020-08-11 20:54:23
 * @FilePath: /KeepLearning/Javascript/ES6/Set和Map.md
 * @Description: ''
-->

# Set 和 Map

## 1. Set

### 基本用法

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

```javascript
// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set];
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size; // 5

// 例三
const set = new Set(document.querySelectorAll("div"));
set.size; // 56

// 去除数组的重复成员
[...new Set(array)];

//去除字符串里面的重复字符。
[...new Set("ababbc")].join("");
// "abc"
```

### Set 实例的属性和方法

Set 结构的实例有以下属性:

- Set.prototype.constructor：构造函数，默认就是 Set 函数。
- Set.prototype.size：返回 Set 实例的成员总数。
- Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
- Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
- Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
- Set.prototype.has(value)：返回一个布尔值，表示该值是否为 Set 的成员。
- Set.prototype.clear()：清除所有成员，没有返回值。

```javascript
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size; // 2

s.has(1); // true
s.has(2); // true
s.has(3); // false

s.delete(2);
s.has(2); // false
```

### 遍历操作

Set 结构的实例有四个遍历方法，可以用于遍历成员:

- Set.prototype.keys()：返回键名的遍历器
- Set.prototype.values()：返回键值的遍历器
- Set.prototype.entries()：返回键值对的遍历器
- Set.prototype.forEach()：使用回调函数遍历每个成员

## 2.WeakSet

### 含义

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

- 首先，**WeakSet 的成员只能是对象，而不能是其他类型的值。**

- 其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

- 由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。

- 这些特点同样适用于本章后面要介绍的 WeakMap 结构。

### WeakSet 结构有以下三个方法。

- WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
- WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
- WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

- WeakSet 没有 size 属性，没有办法遍历它的成员。

## 3. Map

### 含义和基本用法

- JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
- 为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
- Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

- 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如 0 和-0 就是一个键，布尔值 true 和字符串 true 则是两个不同的键。另外，undefined 和 null 也是两个不同的键。虽然 NaN 不严格相等于自身，但 Map 将其视为同一个键。

  ```javascript
  let map = new Map();

  map.set(-0, 123);
  map.get(+0); // 123

  map.set(true, 1);
  map.set("true", 2);
  map.get(true); // 1

  map.set(undefined, 3);
  map.set(null, 4);
  map.get(undefined); // 3

  map.set(NaN, 123);
  map.get(NaN); // 123
  ```

### 实例的属性和操作方法

Map 结构的实例有以下属性和操作方法。

1. size 属性

   size 属性返回 Map 结构的成员总数。

2. Map.prototype.set(key, value)

   set 方法设置键名 key 对应的键值为 value，然后返回整个 Map 结构。如果 key 已经有值，则键值会被更新，否则就新生成该键。

3. Map.prototype.get(key)

   get 方法读取 key 对应的键值，如果找不到 key，返回 undefined。

4. Map.prototype.has(key)

   has 方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。

5. Map.prototype.delete(key)

   delete 方法删除某个键，返回 true。如果删除失败，返回 false。

6. Map.prototype.clear()

   clear 方法清除所有成员，没有返回值。

### 遍历方法

Map 结构原生提供三个遍历器生成函数和一个遍历方法。

- Map.prototype.keys()：返回键名的遍历器。
- Map.prototype.values()：返回键值的遍历器。
- Map.prototype.entries()：返回所有成员的遍历器。
- Map.prototype.forEach()：遍历 Map 的所有成员。

## 4. WeakMap

### 含义

- WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合,但是他们有所区别。
- 首先，WeakMap 只接受对象作为键名（null 除外），不接受其他类型的值作为键名。
- 其次，WeakMap 的键名所指向的对象，不计入垃圾回收机制。

### WeakMap 的语法

WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有 keys()、values()和 entries()方法），也没有 size 属性。因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名。二是无法清空，即不支持 clear 方法。因此，WeakMap 只有四个方法可用：get()、set()、has()、delete()。
