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
    let keyRepeat = Math.ceil(message.length / key.length);
    key = key.repeat(keyRepeat).toUpperCase();
    message = message.toUpperCase();
    console.log(key);

    const ALPHABET = 26;
    let startAlph = 'A';
    let codeStart = startAlph.charCodeAt(0);

    let res = [];

    for (let k = 0; k < message.length; k++) {
      if (message[k] === '') {
        res.push(message[k]);
      } else {
        let index = message.charCodeAt(k) - codeStart;
        let letterShift = key.charCodeAt(k) - codeStart;

        res.push(String.fromCharCode(codeStart + index) % ALPHABET);
      };
    }
    return res.join('');
  }

  decrypt(message, key) {
    let keyRepeat = Math.ceil(message.length / key.length); 
    key = key.repeat(keyRepeat).toUpperCase();
    message = message.toUpperCase();
    console.log(key);

    const ALPHABET = 26;
    let startAlph = 'A';
    let codeStart = startAlph.charCodeAt(0);

    let res = [];

    for (let k = 0; k < message.length; k++) {
      if (message[k] === '') {
        res.push(message[k]);
      } else {
        let index = message.charCodeAt(k) - codeStart;
        let letterShift = key.charCodeAt(k) - codeStart;

        res.push(String.fromCharCode(codeStart + (index - letterShift + ALPHABET) % ALPHABET));
      };
    }
    return res.join('');

  }
}
