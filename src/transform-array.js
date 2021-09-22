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
  let arr = [];
  let din, dop, dip, don;
  
  for(let i = 0; i < array.length; i++) {
    switch(array[i]) {
    
        case '--discard-next':
        i++;
        break;

        case '--discard-prev':
        if(array[i - 2] !== '--discard-next') {arr.pop()}
        break;

        case '--double-next':
        if(i + 1 < array.length) {arr.push(array[i + 1])}
        break;

        case '--double-prev':
        if(i - 1 >= 0 && array[i - 2] !== '--discard-next') arr.push(array[i - 1]);
        break;

        default: arr.push(array[i]);
}
}


//   for (let i = 0; i < array.length; i++) {
//     let orderEl = array[i];
//     var discardNext;
//     var discardPrev;
//     var doubleNext;
//     var doublePrev;

//     if (orderEl === '--discard-next') {
//       discardNext = i;
//       continue;
//     }
//     if (orderEl === '--discard-prev') {
//       discardPrev = i;
//       console.log(discardPrev);
//       continue;
//     }
//     if (orderEl === '--double-next') {
//       doubleNext = i;
//       continue;
//     }
//     if (orderEl === '--double-prev') {
//       doublePrev = i;
//       continue;
//     }
//     arr.push(orderEl);

//   }

//   if (array.includes('--discard-prev')) {
//     if(array.indexOf('--discard-next') != array.indexOf('--discard-prev') - 2) { arr.splice(discardPrev - 1, 1)}
//     }

//   if (array.includes('--double-next')) {
//     if(array.length > array.indexOf('--double-next') + 1) {
// arr.splice(doubleNext, 0, arr[doubleNext])}}

//   if (array.includes('--double-prev')) {
//     if(array.indexOf('--discard-next') != array.indexOf('--double-prev') - 2 && array.indexOf('--double-prev') - 1 >= 0) {
//     arr.splice(doublePrev, 0, arr[doublePrev - 1])}
// }

//   arr.forEach((el, i, array) => {
//     if (Number.isNaN(el)) arr.pop();
//     });
//   arr.forEach((el, i ,array) => {
//     if (el === undefined) arr.pop();
// });
  if (arr.includes('--discard-prev')) {arr.splice(arr.indexOf('--discard-prev'), 1)};
  if (arr.includes('--discard-next')) {arr.splice(arr.indexOf('--discard-next'), 1)};
  if (arr.includes('--double-next')) {arr.splice(arr.indexOf('--double-next'), 1)};
  if (arr.includes('--double-prev')) {arr.splice(arr.indexOf('--double-prev'), 1)};
  return arr;

  // --discard-next excludes the next element of the array from the transformed array.
  // --discard-prev excludes the previous element of the array from the transformed array.
  // --double-next doubles the next element of the array in the transformed array.
  // --double-prev doubles the previous element of the array in the transformed array.

}
