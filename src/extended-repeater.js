import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let strStr = String(str);
  let res = '';
  let opAd = options.addition;
  let opAdSep = options.additionSeparator;
  let opSep = options.separator;
  let opAdRepT = options.additionRepeatTimes;
  let opRepT = options.repeatTimes;

  if (!opRepT) opRepT = 1;
  if (!opSep) opSep = '+' || '|';
  if (!opAdRepT) opAdRepT = 1;
  if (!opAdSep) opAdSep = '|';

  if (options && opAd !== undefined) {
    res = Array(opAdRepT).fill(String(opAd)).join(opAdSep);
  }
  let fRes = Array(opRepT).fill(strStr + res).join(opSep);
  return fRes;
}
