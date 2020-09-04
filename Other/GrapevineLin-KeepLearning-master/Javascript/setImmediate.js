/*
 * @Author: Yu
 * @Date: 2020-08-05 21:01:52
 * @LastEditTime: 2020-08-05 21:01:55
 * @FilePath: \KeepLearning\Javascript\setImmediate.js
 * @Description: ''
 */
setImmediate(() => console.log("this is set immediate 1"));

setImmediate(() => {
  Promise.resolve().then(() => {
    console.log("this is promise1 in setImmediate2");
  });
  process.nextTick(() =>
    console.log("this is process.nextTick1 added inside setImmediate2")
  );
  Promise.resolve().then(() => {
    console.log("this is promise2 in setImmediate2");
  });
  process.nextTick(() =>
    console.log("this is process.nextTick2 added inside setImmediate2")
  );
  console.log("this is set immediate 2");
});

setImmediate(() => console.log("this is set immediate 3"));
