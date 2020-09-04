/*
 * @Author: Yu
 * @Date: 2020-08-03 20:01:58
 * @LastEditTime: 2020-08-03 20:24:23
 * @FilePath: \KeepLearning\Javascript\class.js
 * @Description: ''
 */
"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Parent = (function () {
  function Parent(name = "hi", age = 12) {
    _classCallCheck(this, Parent);

    this.name = name;
    this.age = age;
  }

  _createClass(Parent, [
    {
      key: "speakSomething",
      value: function speakSomething() {
        console.log("I can speek chinese");
      },
    },
  ]);

  return Parent;
})();

let a = new Parent();
console.log("a", a);
