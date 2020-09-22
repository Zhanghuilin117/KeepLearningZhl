# JavaScript 基础

[1. typeof 能判断哪些类型？](#pro1)  
[2. 何时使用===何时使用==](#pro2)  
[3. 值类型和引用类型的区别](#pro3)  
[4. 手写深拷贝](#pro4)  
[5. 类型转换，truly 和 falsely 变量](#pro5)  
[6. 原型的理解](#pro6)  
[7. 如何准确判断一个变量是不是数组？](#pro7)  
[8. 手写一个简易的 jQuery，考虑插件和扩展性 ](#pro8)  
[9. class 的原型本质，怎么理解？ ](#pro9)  
[10. 作用域和自由变量？ ](#pro10)  
[11. 实际开发中闭包的应用场景，举例说明](#pro11)  
[12. this 的不同应用场景，如何取值？](#pro12)  
[13. 手写 bind 函数](#pro13)  
[14. 创建 10 个 a 标签，点击的时候弹出来对应的序号](#pro14)  
[15. 异步和同步的区别](#pro15)  
[16. 手写用 Promise 加载一张图片](#pro16)  
[17. var 和 let const 的区别](#pro17)
[18. 手写深度比较，模拟 lodash isequal](#pro18)  
[19. 数组的 pop push unshift shift 分别是什么](#pro19)  
[20. [10,20,30].map(parseInt)返回什么](#pro20)  
[21. 函数声明和函数表达式的区别](#pro21)  
[22. new Object0 和 Object create0 的区别](#pro22)  
[23. 手写字符串 trim 保证浏览器兼容性](#pro23)  
[24. 获取当前页面 URL 的参数](#pro24)  
[25. 获取当前页面 URL 的参数](#pro25)  
[26. 将 ur 参数转换成 js 对象](#pro26)  
[27. 是否使用过 requestAnimationFrame(RAF)](#pro27)

<br>

<h3 id="pro1">1. typeof 能判断哪些类型？</h3>

- 所有的值类型
  - Number String Boolean Null Undefined Symbol
    > 注意：typeof(null) 是 object 但是 null 是值类型，因为 js 存储中对象是以 000 开头的，而 null 是一个空，相当于全 0，所以 typeof(null) 也是 object
- 识别函数（Function）
  - function clg...
- 引用类型（不能区别具体哪种，用 instanceof 来区分引用类型）
  - Object Array

<br>

<h3 id="pro2">2. 何时使用===何时使用==</h3>

- 除了判断 null 和 undefined，其他一律用===
- ==会进行隐式类型转换
  - 10==“10” true
  - 0==false ...

<br>

<h3 id="pro3">3. 值类型和引用类型的区别</h3>

> https://www.cnblogs.com/leiting/p/8081413.html

- 值类型
  - 占用空间固定，保存在栈中
  - 保存与复制的是值本身
  - 使用 typeof 检测数据的类型
  - 基本类型数据是值类型
- 引用类型
  - 占用空间不固定，保存在堆中
  - 保存与复制的是指向对象的一个指针
  - 使用 instanceof 检测数据类型
  - 使用 new()方法构造出的对象是引用类型
- how to say?

> 值类型包括所有的基本数据类型，number string boolean null undefined symbol，占有空间固定，存储在栈中，保存和复制是值本身，可以用 typeof 检测数据类型

> 引用类型包括 Object Array Function,占用空间不固定，保存在堆中，栈存储的是引用类型的堆内存地址，因此修改引用类型会影响到其他指向这个地址的引用变量,使用 instanceof 检测数据类型

<br>

<h3 id="pro4">4. 手写深拷贝</h3>

不是很熟练，回来看

- 判断值类型和引用类型

```js
if (typeof obj !== "object" || obj == null) {
  // obj 是 null ，或者不是对象和数组，直接返回
  return obj;
}
```

- 判断是数组还是对象

```js
if (obj instanceof Array) {
  result = [];
} else {
  result = {};
}
```

- 递归

```js
for (let key in obj) {
  // 保证 key 不是原型的属性
  if (obj.hasOwnProperty(key)) {
    // 递归调用！！！
    result[key] = deepClone(obj[key]);
  }
}
```

<br>

<h3 id="pro5">5. 类型转换，truly 和 falsely 变量</h3>

经过两次非运算为 true 的为 truly 变量，反之则为 falsely

- truly 变量：!!a===true 的变量
- falsely 变量：!!a=== false 的变量
- 列举强制类型转换和隐式类型转换
  - 强制：parseInt parseFloat toString 等
  - 隐式：if、逻辑运算、==、+ 拼接字符串

<br>

<h3 id="pro6">6. 原型</h3>

重点！！

- 原型关系

  - 每个 cass 都有显示原型 prototype
  - 每个实例都有隐式原型 \_\_proto\_\_
  - 实例的 \_\_proto\_\_指向对应 class 的 prototype

- 基于原型的执行规则

  - 获取属性 xialuo. name 或执行方法 xialuo.sayhi（）时先在自身属性和方法寻找
  - 如果找不到则自动去 \_\_proto\_\_中查找

- 原型链

  > https://blog.csdn.net/weixin_44369568/article/details/90632186

  - 当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的\_\_proto\_\_隐式原型上查找，即它的构造函数的 prototype，如果还没有找到就会再在构造函数的 prototype 的\_\_proto\_\_中查找，这样一层一层向上查找就会形成一个链式结构，我们称为原型链。

  eg. Student 继承父类 People，xialuo 是 Student new 出来的实例，则这个原型链关系是：  
  xialuo.\_\_proto\_\_===Student.prototype,  
  Student.prototype.\_\_proto\_\_===People.prototype,  
  People.prototype.\_\_proto\_\_===Object.prototype,  
  Object.prototype.\_\_proto\_\_==null  
  !!!要会画原型图

<br>

<h3 id="pro7">7. 如何准确判断一个变量是不是数组？</h3>

a instanceof Array

<br>

<h3 id="pro8">8. 手写一个简易的 jQuery，考虑插件和扩展性 </h3>

不会，回来看！

<br>

<h3 id="pro9">9. class 的原型本质，怎么理解？ </h3>

每个 class 都有显示原型 prototype  
每个实例都有\_\_proto\_\_指向对应 class prototype  
[结合问题 6 回答](#pro6)

- 原型和原型链的图示
- 属性和方法的执行规则

<br>

<h3 id="pro10">10. 作用域和自由变量？ </h3>

- 作用域

  - 全局作用域
  - 函数作用域
  - 块级作用域

    ```js
    if (true) {
      let x = 100;
    }
    console.log(x); //会报错
    ```

- 自由变量
  - 一个变量在当前作用域没有定义，但被使用了
  - 向上级作用域，一层一层依次寻找，直至找到为止
  - 如果到全局作用域都没找到，则报错 XX is not defined

<br>

<h3 id="pro11">11. 实际开发中闭包的应用场景，举例说明  </h3>

- 闭包的概念：能够读取其他函数内部变量的函数。
- 闭包的作用：访问函数内部变量、保持函数在环境中一直存在，不会被垃圾回收机制处理。
- 闭包的优点：方便调用上下文中声明的局部变量；逻辑紧密，可以在一个函数中再创建个函数，避免了传参的问题。
- 闭包的缺点：因为使用闭包，可以使函数在执行完后不被销毁，保留在内存中，如果大量使用闭包就会造成内存泄露，内存消耗很大。

- 闭包作为函数返回值

```js
// 函数作为返回值
function create() {
  const a = 100;
  return function () {
    console.log(a);
  };
}

const fn = create();
const a = 200;
fn(); // 100
```

- 函数作为函数被传递

```js
// 函数作为参数被传递
function print(fn) {
  const a = 200;
  fn();
}
const a = 100;
function fn() {
  console.log(a);
}
print(fn); // 100
```

> 所有的自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方！！!

- 应用场景：使用闭包做一个隐藏数据的 api 工具

```js
function createCache() {
  const data = {};
  return {
    set: function (key, value) {
      data[key] = value;
    },
    get: function (key) {
      return data[key];
    },
  };
}
const c = createCache();
c.set("a", 100);
console.log(c.get("a"));
```

<br>

<h3 id="pro12">12. this的不同应用场景，如何取值？ </h3>

> https://juejin.im/post/6844903496253177863

this 永远指向最后调用它的那个对象！！！  
箭头函数的 this 在定义的时候就确定，逐级向上查找找到最近的函数作用域的 this!!!

```js
var name = "windowsName";
var a = {
  name: "Cherry",
  fn: function () {
    console.log(this.name); // Cherry
  },
};
window.a.fn();
```

```js
var name = "windowsName";
var a = {
  name: "Cherry",
  fn: function () {
    console.log(this.name); // windowsName
  },
};

var f = a.fn;
f(); //虽然将 a 对象的 fn 方法赋值给变量 f 了，但是没有调用，fn() 最后仍然是被 window 调用的。所以 this 指向的也就是 window。
```

<br>

<h3 id="pro13">13. 手写 bind 函数   </h3>

不会，回来看！

<br>

<h3 id="pro14">14. 创建 10 个 a 标签，点击的时候弹出来对应的序号   </h3>
涉及到作用域问题。

```js
let a;
for (let i = 0; i < 10; i++) {
  a = document.createElement("a");
  a.innerHTML = i + "<br>";
  a.addEventListener("click", function (e) {
    e.preventDefault();
    alert(i);
  });
  document.body.appendChild(a);
}
```

<br>

<h3 id="pro15">15. 异步和同步的区别</h3>

- 基于 JS 是单线程语言，即一次只执行一个任务。如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务，以此类推。
- 同步：在主线程上排队执行，只有前一个任务执行完毕，才能执行后一个任务。
- 异步：不进入主线程而进入"任务队列"，只有等主线程任务执行完毕，"任务队列"开始通知主线程，请求执行任务，该任务才会进入主线程执行。
  - 异步应用场景： - 网络请求，如 ajax 图片加载 - 定时任务，如 setTimeout

<br>

<h3 id="pro16">16. 手写用 Promise加载一张图片</h3>

promise 解决 callback hell 问题

```js
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      const err = new Error(`图片加载失败 ${src}`);
      reject(err);
    };
    img.src = src;
  });
}

const url1 = "https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg";
const url2 = "https://img3.mukewang.com/5a9fc8070001a82402060220-100-100.jpg";

loadImg(url1)
  .then((img1) => {
    console.log(img1.width);
    return img1; // 普通对象
  })
  .then((img1) => {
    console.log(img1.height);
    return loadImg(url2); // promise 实例
  })
  .then((img2) => {
    console.log(img2.width);
    return img2;
  })
  .then((img2) => {
    console.log(img2.height);
  })
  .catch((ex) => console.error(ex));
```

<br>

<h3 id="pro17">17. var和 let const的区别</h3>

- var 是 ES5 语法，let const 是 ES6 语法；var 有变量提升

```js
console.log(a); //undefined
var a = 200;
===>相当于
var a;
console.log(a);
a = 200;
```

- var 和 let 是变量，可修改；const 是常量，不可修改
- let const 有块级作用域，var 没有

```js
for (var i = 0; i < 10; i++) {
  var j = i + 1;
}
console.log(i, j); // 10 10

for (let i = 0; i < 10; i++) {
  let j = i + 1;
}
console.log(i, j); // 报错
```

<br>

<h3 id="pro18">18. 手写深度比较，模拟 lodash isequal</h3>

```js
// 判断是否是对象或数组
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
// 全相等（深度）
function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型（注意，参与 equal 的一般不会是函数）
    return obj1 === obj2;
  }
  if (obj1 === obj2) {
    return true;
  }
  // 两个都是对象或数组，而且不相等
  // 1. 先取出 obj1 和 obj2 的 keys ，比较个数
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  // 2. 以 obj1 为基准，和 obj2 一次递归比较
  for (let key in obj1) {
    // 比较当前 key 的 val —— 递归！！！
    const res = isEqual(obj1[key], obj2[key]);
    if (!res) {
      return false;
    }
  }
  // 3. 全相等
  return true;
}

// 测试
const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200,
    z: 300,
  },
};
const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200,
  },
};
// console.log( obj1 === obj2 )
console.log(isEqual(obj1, obj2));
```

<br>

<h3 id="pro19">19. 数组的 pop push unshift shift 分别是什么</h3>

从以下几个方面回答：

- 功能是什么？
- 返回值是什么？
- 是否会对原数组造成影响？

1. pop
   array.pop() 从数组中删除最后一个元素，并返回该元素的值，数组长度减 1

2. push
   array.push() 将一个或多个元素添加到数组的末尾，并返回该数组的新长度，数组长度增 1

3. unshift
   array.unshift() 将一个或多个元素添加到数组的开头，并返回该数组的新长度，数组长度增 1

4. shift()
   array.unshift()从数组中删除第一个元素，并返回该元素的值，数组长度减 1

<br>

<h3 id="pro20">20. [10, 20, 30].map(parseInt)返回什么</h3>

```js
const res = [10, 20, 30].map(parseInt);
console.log(res); //[10, NaN, NaN]

// 拆解
[10, 20, 30].map((num, index) => {
  return parseInt(num, index);
});
```

<br>

<h3 id="pro21">21. 函数声明和函数表达式的区别</h3>

- 函数声明：function fn() {...}
- 函数表达式：const fn = function () {...}
- 函数声明会在代码执行前预加载，而函数表达式不会

```js
// 函数声明
const res = sum(10, 20)
console.log(res) // 30

function sum(num1, num2) {
    return num1 + num2
}
----------------------
// 函数表达式
const res = sum(10, 20)
console.log(res) // 报错：Uncaught ReferenceError: Cannot access 'sum' before initialization

const sum = function(num1, num2) {
    return num1 + num2
}
```

<br>

<h3 id="pro22">22. new Object() 和 Object create() 的区别</h3>

Object.create() 创建一个空对象，Object.create(obj) 把创建的空对象的原型设置为 obj

- {} 等同于 new Object() , 原型是 Object.prototype
- Object.create(null) 没有原型
- Object.create({...}) 可以指定原型

<br>

<h3 id="pro23">23. 手写字符串trim保证浏览器兼容性</h3>

```js
String.prototype.trim = function () {
  return this.replace(/^\s+/, "").replace(/\s+$/, "");
};
let str1 = "   a sd   ";
let str2 = str1.trim();
console.log(str1, str1.length); //   a sd    10
console.log(str2, str2.length); //a sd 4
```

<br>

<h3 id="pro24">24. 获取当前页面 URL 的参数</h3>

```js
// // 传统方式
function query(name) {
  const search = location.search.substr(1); // 类似 array.slice(1)
  // search: 'a=10&b=20&c=30'
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, "i");
  const res = search.match(reg);
  if (res === null) {
    return null;
  }
  return res[2];
}
console.log(query("a")); //10

// URLSearchParams
function query(name) {
  const search = location.search;
  const p = new URLSearchParams(search);
  return p.get(name);
}
console.log(query("b")); //20
```

<br>

<h3 id="pro25">25. 数组去重</h3>

```js
// // 传统方式
function unique(arr) {
  const res = [];
  arr.forEach((item) => {
    if (res.indexOf(item) < 0) {
      res.push(item);
    }
  });
  return res;
}

// 使用 Set （无序，不能重复）
function unique(arr) {
  const set = new Set(arr);
  return [...set];
}

const res = unique([30, 10, 20, 30, 40, 10]);
console.log(res); //[30, 10, 20, 40]
```

<br>

<h3 id="pro26">26. 将 url 参数转换成 js 对象</h3>

> https://www.cnblogs.com/aurora-ql/p/13657820.html

```js
// 传统方式，分析 search
function queryToObj() {
  const res = {};
  const search = location.search.substr(1); // 去除 ?
  search.split("&").forEach((paramsStr) => {
    const arr = paramsStr.split("=");
    const key = arr[0];
    const value = arr[1];
    res[key] = value;
  });
  return res;
}

// URLSearchParams
function queryToObj() {
  const res = {};
  const paramsList = new URLSearchParams(location.search);
  paramsList.forEach((val, key) => {
    res[key] = val;
  });
  return res;
}
```

<br>

<h3 id="pro27">27. 是否使用过 requestAnimationFrame（RAF）</h3>

- 想要动画流畅，更新频率要 60 帧/s，即 16.7ms 更新一次视图
- setTimeout 需要手动控制频率，而使用 RAF 浏览器会自动控制
- 后台标签或者隐藏在 frame 标签中， RAF 会自动停止，但 setTimeout 不会自动停止

```html
<style>
  #div1 {
    width: 100px;
    height: 50px;
    background-color: red;
  }
</style>
<div id="div1"></div>

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>
  // 3s 把宽度从 100px 变为 640px， 即增加 540px
  // 60帧/s 3s 180帧 每次增加 3px
  const $div = $("#div1");
  let curWidth = 100;
  const maxWidth = 640;

  // function animation() {
  // curWidth = curWidth + 3
  // $div1.css('width', curWidth)
  // if (curWidth < maxWidth) {
  //   // 自己控制时间
  //  setTimeout(animation, 16.7)
  // }
  // }

  function animation() {
    curWidth = curWidth + 3;
    $div1.css("width", curWidth);
    if (curWidth < maxWidth) {
      window.requestAnimationFrame(animation);
    }
  }
  animation();
</script>
```
