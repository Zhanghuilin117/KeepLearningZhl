# JavaScript Web API

[1. typed 能判断哪些类型？](#pro1)  
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

<br>

<h3 id="pro1">1. DOM是哪种数据结构？</h3>

DOM Document Object Model
DOM 是一种树形结构的数据结构

<br>

<h3 id="pro2">2. DOM操作的常用API</h3>

- 获取页面元素 API
  - 根据 id 获取元素 document.getElementById('div1') 该方法的参数是大小写敏感的
  - 根据类名获取元素 document.getElementsByClassName('div1 div2') 参数可以是多个 class，它们之间使用空格分隔
  - 根据选择器获取元素 document.querySelect('.myClass') document.querySelectorAll('.myClass')
  - 根据标签名获取元素 document.getElementsByTagName('div')
  - 根据 name 获取元素 document.getElementsByName('div1')
- 创建节点 API
  - 创建元素节点 document.createElement('div')
  - 创建文本节点 document.createTextNode('Hello')
  - 创建属性节点 document.createAttribute(name)
  - 创建注释节点 document.createComment(data)
- 修改页面 API
  - 插入节点 let p = document.createElement('p'); document.body.appendChild(p) appendChild 现有节点会移动现有节点
  - 删除子节点 let divA = document.getElementById('A'); divA.parentNode.removeChild(divA)
  - 克隆节点 let cloneUL = document.querySelector('ul').cloneNode(true)
  - 将某个节点插入父节点内部的指定位置 let insertedNode = parentNode.insertBefore(newNode, referenceNode); 第一个参数是所要插入的节点，第二个参数是父节点内部的一个子节点。新将插在这个子节点的前面。返回值是插入的新节点
  - 替换子节点 let replacedNode = parentNode.replaceChild(newChild, oldChild); 第一个参数 newChild 是用来替换的新节点，第二个参数 oldChild 是将要替换走的子节点。返回值是替换走的那个节点 oldChild

<br>

<h3 id="pro3">3. attr 和 property的区别</h3>

- property：修改对象属性，不会体现到 htm 结构中
  - p1.style.width = '100px'; console.log( p1.style.width )
- attribute：修改 htm 属性，会改变 html 结构
  - p1.setAttribute('data-name', 'imooc'); console.log( p1.getAttribute('data-name') )
- 两者都有可能引起 DOM 重新渲染

<br>

<h3 id="pro4">4. 一次性插入多个DOM节点，考虑性能</h3>

```js
const list = document.getElementById("list");

// 创建一个文档片段，此时还没有插入到 DOM 结构中
const frag = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
  const li = document.createElement("li");
  li.innerHTML = `List item ${i}`;

  // 先插入文档片段中
  frag.appendChild(li);
}

// 都完成之后，再统一插入到 DOM 结构中
list.appendChild(frag);

console.log(list);
```

<br>

<h3 id="pro5">5. 如何识别浏览器的类型</h3>

```js
const ua = navigator.userAgent;
const ischrome = ua.indexof("Chrome");
console.log(ischrome);
```

- 拆解 url 各个部分

```js
console.log(location.href); // url
console.log(location.protocol); //返回页面使用的协议  http:或https:
console.log(location.pathname); //返回目录和文件名 /project/test.html
console.log(location.search); //返回？号后面的所有值。
console.log(location.hash); //返回#号后面的字符串，不包含散列，则返回空字符串。
console.log(location.host); //返回服务器名称和端口号
console.log(location.post); //返回URL中的指定的端口号，如URL中不包含端口号返回空字符串
```

<br>

<h3 id="pro6">6. 手写通用的事件绑定函数</h3>

```js
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector;
    selector = null;
  }
  elem.addEventListener(type, (event) => {
    const target = event.target;
    if (selector) {
      // 代理绑定
      if (target.matches(selector)) {
        fn.call(target, event);
      }
    } else {
      // 普通绑定
      fn.call(target, event);
    }
  });
}
```

<br>

<h3 id="pro7">7. 描述事件冒泡的流程</h3>

- 基于 DOM 树形结构
- 事件会顺着触发元素往上冒泡
- 应用场景：代理

<br>

<h3 id="pro8">8. 无限下拉图片列表，如何监听每个图片的点击</h3>

事件委托就是利用事件冒泡，只制定一个父级处理事件，就可以管理父级下所有子元素的事件。

- 事件代理
- 用 e.target 获取触发元素
- 用 matches 来判断是否是触发元素

<br>

<h3 id="pro9">9. 手写一个简易的ajax</h3>

```js
function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404 || xhr.status === 500) {
          reject(new Error("404 not found"));
        }
      }
    };
    xhr.send(null);
  });
  return p;
}

const url = "/data/test.json";
ajax(url)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

<br>

<h3 id="pro10">10. xhr的几个状态码</h3>

- xhr.readyState

  - 0 -（未初始化）还没有调用 send() 方法
  - 1 -（载入）已调用 send() 方法，正在发送请求
  - 2 -（载入完成） send() 方法执行完成，已经接收到全部响应内容
  - 3 -（交互）正在解析响应内容
  - 4 -（完成）响应内容解析完成，可以在客户端调用

- xhr.status
  - 2XX - 表示成功处理请求，如 200
  - 3XX - 需要重定向，浏览器直接跳转，如 301 302 304
  - 4XX - 客户端请求错误，如 404 403
  - 5XX - 服务器端错误

<br>

<h3 id="pro11">11. 同源策略</h3>

- ajax 请求时，浏览器要求当前网页和 server 必须同源（安全）
- 同源：协议、域名、端口，三者必须一致
  - 前端 http://a.com：8080/；server https://b.com/api/xxx 不同源
- 加载图片 CSS JS 可无视同源策略
  - \<img src=跨域的图片地址 />
  - \<link href=跨域的 css 地址 />
  - \<script src=跨域的 js 地址></script>

<br>

<h3 id="pro12">12. 实现跨域的几种方式</h3>

> 所有的跨域，都必须经过 server 端允许和配合  
> 未经 server 端允许就实现跨域，说明浏览器有漏洞，危险信号

- \<script>可实现 JSONP 跨域

JSONP 原理
\<script>可绕过跨域限制
服务器可以任意动态拼接数据返回
所以，\<script> 就可以获得跨域的数据，只要服务端愿意返回
