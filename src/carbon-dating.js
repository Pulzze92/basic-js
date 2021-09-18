import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity ) {
  if (sampleActivity > 15 || sampleActivity < 0 || isNaN(sampleActivity) || Number(sampleActivity) === 0 || typeof(sampleActivity) !== 'string') return false;
  let data = Number(sampleActivity);
  return Math.ceil(Math.log(MODERN_ACTIVITY / data) / (0.693 / HALF_LIFE_PERIOD));
}
