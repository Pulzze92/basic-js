
import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */

let chain = [];
export default {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position > this.chain.length - 1) {
      this.chain = [];
      throw new Error('message':'You can\'t remove incorrect link!');
    }
    if (isNaN(position)) {
      this.chain = [];
      throw new Error('message':'You can\'t remove incorrect link!');
    }
    if (position < 1) {
      this.chain = [];
      throw new Error('message':'You can\'t remove incorrect link!');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};