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
export default function transform(array) {
  if (!(Array.isArray(array))) throw new Error("'arr' parameter must be an instance of the Array!");
  if(array.length == 0) return [];

  if (!(Array.isArray(array))) throw new Error("'arr' parameter must be an instance of the Array!");
  if(array.length == 0) return [];
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    let orderEl = array[i];
    var discardNext;
    var discardPrev;
    var doubleNext;
    var doublePrev;

    if (orderEl === '--discard-next') {
      discardNext = i;
      continue;
    }
    if (orderEl === '--discard-prev') {
      discardPrev = i;
      console.log(discardPrev);
      continue;
    }
    if (orderEl === '--double-next') {
      doubleNext = i;
      continue;
    }
    if (orderEl === '--double-prev') {
      doublePrev = i;
      continue;
    }
    arr.push(orderEl);

  }
  if (array.includes('--discard-next')) {arr.splice(discardNext, 1)}
  if (array.includes('--discard-prev')) {
    if (discardPrev == 0) {} else {
    arr.splice(discardPrev - 1, 1)}}
  if (array.includes('--double-next')) {arr[doubleNext] *= 2};
  if (array.includes('--double-prev')) {arr[doublePrev - 1] *= 2};
  arr.forEach((el, i, array) => {
    if (Number.isNaN(el)) arr.pop();
    });
  return arr;

  // --discard-next excludes the next element of the array from the transformed array.
  // --discard-prev excludes the previous element of the array from the transformed array.
  // --double-next doubles the next element of the array in the transformed array.
  // --double-prev doubles the previous element of the array in the transformed array.

}
