/*
 * @Author: Yu
 * @Date: 2020-08-05 10:19:09
 * @LastEditTime: 2020-08-05 15:40:25
 * @FilePath: \KeepLearning\Javascript\task.js
 * @Description: ''
 */
setImmediate(() => {
  console.log(1);
}, 0);
setTimeout(() => {
  console.log(2);
}, 0);
new Promise((resolve) => {
  console.log(3);
  resolve();
  console.log(4);
}).then(() => {
  console.log(5);
});
console.log(6);
process.nextTick(() => {
  console.log(7);
});
// for(let i=0;i<100;i++)
console.log(8);
