/*
 * @Author: Yu
 * @Date: 2020-08-03 21:24:38
 * @LastEditTime: 2020-08-03 21:27:21
 * @FilePath: \KeepLearning\Javascript\new.js
 * @Description: ''
 */
//自己定义的new方法
let newMethod = function (Parent, ...rest) {
  // 1.以构造器的prototype属性为原型，创建新对象；
  let child = Object.create(Parent.prototype);
  // 2.将this和调用参数传给构造器执行
  //   取得构造函数的返回值
  const ret = Parent.apply(child, rest);
  // 3.返回第一步的对象
  //   如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
  return ret instanceof Object ? ret : child;
};

function person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = newMethod(person, "jack", 18);

console.log("p1", p1);
