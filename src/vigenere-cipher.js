import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    let keyRepeat = Math.ceil(message.length / key.length);   
    key = key.repeat(keyRepeat).toUpperCase();

    let res = [];
    let index = 0;  
    

    for(let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
        res.push(message[i]);
      } else {
        let shift = message.charCodeAt(i) - 65;
        let code = key.charCodeAt(index) - 65;
        let encryptCode = (shift + code) % 26;
        res.push(String.fromCharCode(encryptCode + 65));
        index++;
      }
    }
    if (this.reverse) {
      return res.reverse().join('');
    } else {
      return res.join('');
    }
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let keyRepeat = Math.ceil(message.length / key.length); 
    key = key.repeat(keyRepeat).toUpperCase();
    let res = [];
    let index = 0;  
    

    for(let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) > 90 || message.charCodeAt(i) < 65) {
        res.push(message[i]);
      } else {
        let shift = message.charCodeAt(i) - 65;
        let code = key.charCodeAt(index) - 65;
        let encryptCode = (shift - code + 26) % 26;
        res.push(String.fromCharCode(encryptCode + 65));
        index++;
      }
    }
    if (this.reverse) {
      return res.reverse().join('');
    } else {
      return res.join('');
    }

  }
}
