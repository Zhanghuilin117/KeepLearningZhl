/*
 * @Author: Yu
 * @Date: 2020-08-18 11:29:27
 * @LastEditTime: 2020-08-18 15:20:19
 * @FilePath: \KeepLearning\Javascript\数组.js
 * @Description: ''
 */

//数组去重
function unique(array) {
  // return [...new Set(array)];
  let unique = [];
  for (let key of array) {
    if (unique.indexOf(key) == -1) {
      unique.push(key);
    }
  }
  return unique;
}

// console.log(unique([23,22,25,24,22,23]))

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let index = Math.floor(array.length / 2);
  let middle = array.splice(index, 1)[0];
  let left = [],
    right = [];
  for (let arr of array) {
    if (arr < middle) {
      left.push(arr);
    } else {
      right.push(arr);
    }
  }
  return quickSort(left).concat(middle, quickSort(right));
}

console.log(quickSort([23, 55, 78, 945, 123, 1, 0]));
