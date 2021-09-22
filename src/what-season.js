import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date)) throw new Error('Invalid date!')
  try {
    isNaN(date.getTime())
  } catch {
    throw new Error('Invalid date!');
  }

  let map = new Map ([
    [1, 'winter'],
    [2, 'winter'],
    [3, 'spring'],
    [4, 'spring'],
    [5, 'spring'],
    [6, 'summer'],
    [7, 'summer'],
    [8, 'summer'],
    [9, 'autumn'],
    [10, 'autumn'],
    [11, 'autumn'],
    [12, 'winter']
  ]);

  let month = date.getMonth() + 1;
  let season = map.get(month);

  return season;
}
