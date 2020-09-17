# JavaScript 异步进阶

[1. JS 如何执行？](#pro1)  
[2. event loop（事件轮询）过程](#pro2)  
[3. Promise 的三种状态和 then catc](#pro3)  
[4. async/ await 和 Promise 的关系](#pro4)  
[5. 微任务和宏任务](#pro5)

<br>

<h3 id="pro1">1. JS如何执行？</h3>

- 从前到后，一行一行执行
- 如果某一行执行报错，则停止下面代码的执行
- 先把同步代码执行完，再执行异步

<br>

<h3 id="pro2">2. event loop（事件轮询）过程</h3>

1. 执行所有同步代码，依次放入 call stack（调用栈）中执行。当 Stack 中执行到微任务的时候就放在 Micro Task Queue（微任务队列），执行到宏任务的时候就将他丢给 WebAPIs，接着执行同步任务；
2. 全局 Script 代码执行完毕后，调用栈 Stack 会清空；
3. 从微队列 microtask queue 中取出位于队首的回调任务，放入调用栈 Stack 中执行，执行完后 microtask queue 长度减 1；
4. 继续取出位于队首的任务，放入调用栈 Stack 中执行，以此类推，直到直到把 microtask queue 中的所有任务都执行完毕。注意，如果在执行 microtask 的过程中，又产生了 microtask，那么会加入到队列的末尾，也会在这个周期被调用执行；
5. microtask queue 中的所有任务都执行完毕，此时 microtask queue 为空队列，调用栈 Stack 也为空；
6. 取出宏队列 macrotask queue 中位于队首的任务，放入 Stack 中执行；
7. 执行完毕后，调用栈 Stack 为空；
8. 重复第 3-7 个步骤；
9. 重复第 3-7 个步骤；
   ......

执行顺序问题:
网上很经典的面试题

```js
async function async1() {
  console.log("async1 start"); //2
  await async2(); // 这一句会同步执行，返回 Promise ，其中的 `console.log('async2')` 也会同步执行
  console.log("async1 end"); //6  上面有 await ，下面就变成了“异步”，类似 cakkback 的功能（微任务）
}

async function async2() {
  console.log("async2"); //3
}

console.log("script start"); //1

setTimeout(function () {
  // 异步，宏任务
  console.log("setTimeout"); //8
}, 0);

async1();

new Promise(function (resolve) {
  // 返回 Promise 之后，即同步执行完成，then 是异步代码
  console.log("promise1"); // 4  Promise 的函数体会立刻执行
  resolve();
}).then(function () {
  // 异步，微任务
  console.log("promise2"); //7
});

console.log("script end"); //5

// 同步代码执行完之后，屡一下现有的异步未执行的，按照顺序
// 1. async1 函数中 await 后面的内容 —— 微任务
// 2. setTimeout —— 宏任务
// 3. then —— 微任务
```

```js
setImmediate(function () {
  console.log(1);
}, 0);
setTimeout(function () {
  console.log(2);
}, 0);
new Promise(function (resolve) {
  console.log(3);
  resolve();
  console.log(4);
}).then(function () {
  console.log(5);
});
console.log(6);
process.nextTick(function () {
  console.log(7);
});
console.log(8);

// 答案是：3 4 6 8 7 5 2 1
```

总结：

1. 同步代码执行顺序优先级高于异步代码执行顺序优先级；
2. new Promise(fn)中的 fn 是同步执行；
3. process.nextTick() > Promise.then() > setTimeout > setImmediate;

<br>

<h3 id="pro3">3. Promise的三种状态和 then catch</h3>

- 三种状态 pending resolved rejected
- 状态的表现
  - pending 状态，不会触发 then 和 catch
  - resolved 状态，会触发后续的 then 回调函数
  - rejected 状态，会触发后续的 catch 回调函数
- then 和 catch 改变状态
  - then 正常返回 resolved，里面有报错则返回 rejected
  - catch 正常返回 resolved，里面有报错则返回 rejected

```js
// then() 一般正常返回 resolved 状态的 promise
Promise.resolve().then(() => {
  return 100;
});

// then() 里抛出错误，会返回 rejected 状态的 promise
Promise.resolve().then(() => {
  throw new Error("err");
});

// catch() 不抛出错误，会返回 resolved 状态的 promise
Promise.reject().catch(() => {
  console.error("catch some error");
});

// catch() 抛出错误，会返回 rejected 状态的 promise
Promise.reject().catch(() => {
  console.error("catch some error");
  throw new Error("err");
});
```

<br>

<h3 id="pro4">4.  async/ await 和 Promise 的关系</h3>

- async 函数返回结果都是 Promise 对象（如果函数内没返回 Promise ，则自动封装一下）

```js
async function fn2() {
  return new Promise(() => {});
}
console.log(fn2());

async function fn1() {
  return 100;
}
console.log(fn1()); // 相当于 Promise.resolve(100)
```

- await 后面跟 Promise 对象：会阻断后续代码，等待状态变为 resolved ，才获取结果并继续执行
- await 后续跟非 Promise 对象：会直接返回

```js
(async function () {
  const p1 = new Promise(() => {});
  await p1;
  console.log("p1"); // 不会执行
})()(async function () {
  const p2 = Promise.resolve(100);
  const res = await p2;
  console.log(res); // 100
})()(async function () {
  const res = await 100;
  console.log(res); // 100
})()(async function () {
  const p3 = Promise.reject("some err");
  const res = await p3;
  console.log(res); // 不会执行
})();
```

> async/ await 是消灭异步回调的终极武器，但和 Promise 并不互斥反而，两者相辅相成

<br>

<h3 id="pro5">5. 微任务和宏任务</h3>

- 宏任务：setTimeout setInterval DOM 事件
- 微任务：Promise（对于前端来说）
- 微任务比宏任务执行的更早，微任务 DOM 渲染前会触发，宏任务 DOM 渲染后再触发

再深入思考一下：为何两者会有以上区别，一个在渲染前，一个在渲染后？

- 微任务：ES 语法标准之内，JS 引擎来统一处理。即，不用浏览器有任何关于，即可一次性处理完，更快更及时。
- 宏任务：ES 语法没有，JS 引擎不处理，浏览器（或 nodejs）干预处理。
