import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix ) {
  if (matrix === undefined || matrix.length == 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach(i => {
      (i === '^^') ? count = count + 1 : '';
    });
  }
  return count;
}
