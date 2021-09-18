
import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position > this.arr.length - 1) {
      this.arr = [];
      throw new Error('message':'You can\'t remove incorrect link!');
    }
    if (isNaN(position)) {
      this.arr = [];
      throw new Error('message':'You can\'t remove incorrect link!');
    }
    if (position < 1) {
      this.arr = [];
      throw new Error('message':'You can\'t remove incorrect link!');
    }

    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
};