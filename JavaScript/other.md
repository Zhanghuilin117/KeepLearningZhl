# 其他常见基础面试题

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

<h3 id="pro1">1. 状态码分类以及常见状态码</h3>

- 1XX服务器收到请求
- 2XX请求成功，如200
- 3XX重定向
  - 301永久重定向（配合 location，浏览器自动处理）
  - 302临时重定向（配合 location，浏览器自动处理）
  - 304资源未被修改
- 4XX客户端错误
  - 403没有权限
  - 404资源未找到
- 5XX服务端错误
  - 500服务器错误
  - 504网关超时

> 关于协议和规范：就是一个约定，要求大家都跟着执行，不要违反规范，例如IE浏览器自定规范最终被淘汰

<br>

<h3 id="pro2">2. http methods</h3>

- 传统的 methods
  - get获取服务器的数据
  - post像服务器提交数据
  - 简单的网页功能，就这两个操作

- 现在的 methods
  - get获取数据
  - post新建数据
  - patch/put更新数据
  - delete删除数据

- Restful api一种新的API设计方法（早已推广使用）
  - 传统API设计：把每个url当做一个功能 
  - Restful api设计：把每个url当做一个唯一的资源  

- example
  - 不使用ur参数传统API设计：
    - 传统的methods：/api/list?pageIndex=2
    - Restful APi设计：/api/list/2
  - 用method表示操作类型
    - 传统的methods：post请求 /api/create-blog;  post请求/api/update-blog?id=100; get请求api/get-blog?id=100
    - Restful API: get请求 /api/list/2；post请求 /api/list/2
  
<br>

<h3 id="pro4">4. http headers</h3>

- Request Headers
  - Accept 浏览器可接收的数据格式
  - Accept-Encoding 浏览器可接收的压缩算法，如gzip
  - Accept-Languange 浏览器可接收的语言，如zh-CN
  - Connection:keep-aive 一次TCP连接重复使用
  - cookie 数据信息
  - Host 访问的域名
  - User- Agent（简称UA）浏览器信息
  - Content-type 发送数据的格式，如 application/json

- Response Headers 
  - Content-type 返回数据的格式，如 application/json
  - Content-length 返回数据的大小，多少字节
  - Content-Encoding 返回数据的压缩算法，如gzip
  - Set-Cookie
  
<br>

<h3 id="pro5">5. http 缓存</h3>

协商缓存服务器端缓存策略
◆服务器判断客户端资源，是否和服务端资源一样致则返回304，否则返回200和最新的资源

三种刷新操作
◆正常操作：地址栏输入url，跳转链接，前进后退等
◆手动刷新：F5，点击刷新按钮，右击菜单刷新
◆强制刷新：ctrl+F5

不同刷新操作，不同的缓存策略
◆正常操作：强制缓存有效，协商缓存有效
◆手动刷新：强制缓存失效，协商缓存有效
◆强制刷新：强制缓存失效，协商缓存失妏