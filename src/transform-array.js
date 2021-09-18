import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (typeof(arr) !== 'object') return 'Error';
  if(!arr) return 'Error';
  if(arr.length == 0) return [];

  let map = new Map([
    ['a', '--discard-next'],
    ['b', '--discard-prev'],
    ['c', '--double-next'],
    ['d', '--double-prev']
  ]);
  let hasProp = false;
  let varT = '';
  let order = 0;
  let arr2 = [];

  // if(arr[0] == map.get('b') || arr[0] == map.get('d')) return arr[1];
  // arr.filter((el) => {return el !== Boolean});

  arr.forEach((el, i) => {
    if(el === map.get('a') || el === map.get('b') || el === map.get('c') || el === map.get('d')) {
      hasProp = true;
      varT += el;
      order += i;
    }
  });
  arr.forEach(el => {arr2.push(el)});
  let arrWithoutItem = arr2.splice(order, 1);
  let condition = arrWithoutItem.toString();
  switch (condition) {
    case map.get('a') : arr2.forEach((el, i, array) => {if (array[i + 2] === map.get('d') || array[i + 2] === map.get('b')) {i += 2} else {i++}});
      break;
    case map.get('b') : arr2.forEach((el, i, array) => {if (i > 0) arr2.pop()});
      break;
    case map.get('c') : arr2.forEach((el, i, array) => {if (array.length - 1 > i) arr2.push(array[i + 1])});
      break;
    case map.get('d') : arr2.forEach((el, i, array) => { if(i > 0) arr2.push(array[i - 1])});
      break;
    default: arr2.forEach((el, i, array) => {arr2.push(array[i])});
      break;
  }
  if (!hasProp) return arr;
  return arr2;
}
