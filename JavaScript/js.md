# JavaScript

[1. typed 能判断哪些类型？](#pro1)  
[2. 何时使用===何时使用==](#pro2)  
[3. 值类型和引用类型的区别](#pro3)  
[4. 手写深拷贝](#pro4)  
[5. 类型转换，truly 和 falsely 变量](#pro5)

<br>

<h3 id="pro1">1. typed 能判断哪些类型？</h3>

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

不是很理解，回来看

- 注意判断值类型和引用类型

```
if (typeof obj !== 'object' || obj == null) {
    // obj 是 null ，或者不是对象和数组，直接返回
        return obj
    }
```

- 注意判断是数组还是对象

```
if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
```

- 递归

```
 for (let key in obj) {
        // 保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用！！！
            result[key] = deepClone(obj[key])
        }
    }
```

<br>

<h3 id="pro5">5. 类型转换，truly 和 falsely 变量</h3>

经过两次非运算为 true 的为 truly 变量，反之则为 falsely

- truly 变量：!!a===true 的变量
- falsely 变量：!!a=== false 的变量
