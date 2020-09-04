/*
 * @Author: Yu
 * @Date: 2020-08-06 10:27:01
 * @LastEditTime: 2020-08-18 11:48:30
 * @FilePath: \KeepLearning\Javascript\Array-reduce.js
 * @Description: '
    看概念有点绕，reduce到底有什么用呢？只要记住reduce方法的核心作用就是聚合即可。
    何谓聚合？操作一个已知数组来获取另一个值就叫做聚合，这种情况下用reduce准没错，
    下面来看几个实际应用：
    聚合为数字：数组元素求和、求积、求平均数等'
 */
const arr = [
  { name: "Logan", score: 89 },
  { name: "Emma", score: 93 },
];
//求平均数
const sum = (arr) => arr.reduce((total, { score }) => total + score, 0);
//求平均数
const avarage = (arr) =>
  arr.reduce((avg, { score }, index, array) => {
    return index === array.length - 1
      ? (avg + score) / array.length
      : avg + score;
  }, 0);
//聚合为字符串
const str = (arr) =>
  arr.reduce(
    (str, { name, score }) => `${str}${name}'s score is ${score}; `,
    ""
  );
//求积
const product = (arr) => arr.reduce(((prd, { score }) => prd * score),1);


let array = [...new Set([123,12,123,354,245,12])]
console.log(array)