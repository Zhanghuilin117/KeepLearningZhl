# JavaScript 基础

[1. typed 能判断哪些类型？](#pro1)  
[2. 何时使用===何时使用==](#pro2)  
[3. 值类型和引用类型的区别](#pro3)  
[4. 手写深拷贝](#pro4)  
[5. 类型转换，truly 和 falsely 变量](#pro5)  
[6. 原型的理解](#pro6)  
[7. 如何准确判断一个变量是不是数组？](#pro7)  
[8. 手写一个简易的 jQuery，考虑插件和扩展性 ](#pro8)  
[9. class 的原型本质，怎么理解？ ](#pro9)

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

不是很熟练，回来看

- 判断值类型和引用类型

```
if (typeof obj !== 'object' || obj == null) {
    // obj 是 null ，或者不是对象和数组，直接返回
        return obj
    }
```

- 判断是数组还是对象

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
  xialuo.\_\_proto\_\_===Student.prototype, Student.prototype.\_\_proto\_\_===People.prototype,  
  People.prototype.\_\_proto\_\_===Object.prototype,  
  Object.prototype.\_\_proto\_\_==null  
  !!!要会画原型图

<br>

<h3 id="pro7">7. 如何准确判断一个变量是不是数组？</h3>

a instanceof Array

<br>

<h3 id="pro8">8. 手写一个简易的 jQuery，考虑插件和扩展性 </h3>

<br>

<h3 id="pro9">9. class 的原型本质，怎么理解？ </h3>

每个 class 都有显示原型 prototype  
每个实例都有\_\_proto\_\_指向对应 class prototype  
[结合问题 6 回答](#pro6)

- 原型和原型链的图示
- 属性和方法的执行规则

<br>

<h3 id="pro10">10.作用域和自由变量？ </h3>

- 作用域
  - 全局作用域
  - 函数作用域
  - 块级作用域 

    ~~~  
    if(true){
      let x = 100;
    }
    console.log(x) //会报错

- 自由变量
  - 一个变量在当前作用域没有定义，但被使用了
  - 向上级作用域，一层一层依次寻找，直至找到为止
  - 如果到全局作用域都没找到，则报错 XX is not defined

<br>

<h3 id="pro11">11. 闭包 </h3>

> 闭包就是能够读取其他函数内部变量的函数。
~~~
function f1(){
　　var n=999;
　　function f2(){
　　　　alert(n);
　　}
　　return f2;
}
　　var result=f1();
　　result(); // 999
~~~

//所有的自由变量的查找，是在函数定义的地方，向上级作用域查找//不是在执行的地方！！
this的不同应用场景，如何取值？  
手写bind函数  
实际开发中闭包的应用场景，举例说明   
创建10个a标签，点击的时候弹出来对应的序号   

