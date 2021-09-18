import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(!members|| !members.length) return false;
  let arr = [];
  members.filter(el => {
    if (typeof(el) === 'string') arr.push(el);
  });
  let arrWS = [];
  arr.forEach(el => {
    arrWS.push(el.trim());
  });
  let arrStd = arrWS.sort();
  let arrWL = [];
  arrStd.forEach(el => {
    arrWL.push(el.charAt(0).toUpperCase());
  });
  return arrWL.sort().join('');
}
