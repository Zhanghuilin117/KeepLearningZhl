# HTTP

[1.  状态码分类以及常见状态码](#pro1)  
[2. http methods](#pro2)  
[3. http headers](#pro3)  
[4. http 缓存](#pro4)  

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

<h3 id="pro3">3. http headers</h3>

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

<h3 id="pro4">4. http 缓存</h3>

- 什么是缓存
  - 浏览器缓存(Brower Caching)是浏览器对之前请求过的文件进行缓存，以便下一次访问时重复使用，节省带宽，提高访问速度，降低服务器压力

- 强制缓存
  -  浏览器初次请求服务器，服务器判断资源能否缓存，能缓存则返回资源和cache-control，浏览器再次请求的时候，判断cache-control缓存时间是否失效，没有失效则从本地缓存中获取资源返回给浏览器，失效则重新请求服务器

- 协商缓存
  -  浏览器初次请求服务器，服务器判断资源能否缓存，能缓存则返回资源和资源标识，浏览器再次请求的时候，服务器判断客户端资源是否和服务端资源一致，一致则返回304，否则返回200和最新的资源。判断是否一致通过Etag和last-modified判断，浏览器去请求服务器，服务器返回计算得到的Etag和last-modified，浏览器再次请求request headers中带有if-none-match和if-modified-since（值就是最新的last-modified）

- 三种刷新操作
  - 正常操作：地址栏输入url，跳转链接，前进后退等
    - 强制缓存有效，协商缓存有效
  - 手动刷新：F5，点击刷新按钮，右击菜单刷新
    - 强制缓存失效，协商缓存有效
  - 强制刷新：ctrl+F5
    - 强制缓存失效，协商缓存失效


